# `bedrockFlowVersion` Submodule <a name="`bedrockFlowVersion` Submodule" id="@cdktn/provider-awscc.bedrockFlowVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockFlowVersion <a name="BedrockFlowVersion" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_version awscc_bedrock_flow_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  flow_arn: str,
  description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.flowArn">flow_arn</a></code> | <code>str</code> | Arn representation of the Flow. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the flow version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.flowArn"></a>

- *Type:* str

Arn representation of the Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_version#flow_arn BedrockFlowVersion#flow_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.description"></a>

- *Type:* str

Description of the flow version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_version#description BedrockFlowVersion#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.resetDescription">reset_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.resetDescription"></a>

```python
def reset_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockFlowVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockFlowVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockFlowVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockFlowVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockFlowVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.customerEncryptionKeyArn">customer_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference">BedrockFlowVersionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowId">flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowArnInput">flow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `customer_encryption_key_arn`<sup>Required</sup> <a name="customer_encryption_key_arn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.customerEncryptionKeyArn"></a>

```python
customer_encryption_key_arn: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.definition"></a>

```python
definition: BedrockFlowVersionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference">BedrockFlowVersionDefinitionOutputReference</a>

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `flow_id`<sup>Required</sup> <a name="flow_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `flow_arn_input`<sup>Optional</sup> <a name="flow_arn_input" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowArnInput"></a>

```python
flow_arn_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockFlowVersionConfig <a name="BedrockFlowVersionConfig" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  flow_arn: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.flowArn">flow_arn</a></code> | <code>str</code> | Arn representation of the Flow. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.description">description</a></code> | <code>str</code> | Description of the flow version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

Arn representation of the Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_version#flow_arn BedrockFlowVersion#flow_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the flow version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_flow_version#description BedrockFlowVersion#description}

---

### BedrockFlowVersionDefinition <a name="BedrockFlowVersionDefinition" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinition()
```


### BedrockFlowVersionDefinitionConnections <a name="BedrockFlowVersionDefinitionConnections" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnections.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionConnections()
```


### BedrockFlowVersionDefinitionConnectionsConfiguration <a name="BedrockFlowVersionDefinitionConnectionsConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfiguration()
```


### BedrockFlowVersionDefinitionConnectionsConfigurationConditional <a name="BedrockFlowVersionDefinitionConnectionsConfigurationConditional" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditional"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditional.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditional()
```


### BedrockFlowVersionDefinitionConnectionsConfigurationData <a name="BedrockFlowVersionDefinitionConnectionsConfigurationData" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationData.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationData()
```


### BedrockFlowVersionDefinitionNodes <a name="BedrockFlowVersionDefinitionNodes" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodes.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodes()
```


### BedrockFlowVersionDefinitionNodesConfiguration <a name="BedrockFlowVersionDefinitionNodesConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfiguration()
```


### BedrockFlowVersionDefinitionNodesConfigurationAgent <a name="BedrockFlowVersionDefinitionNodesConfigurationAgent" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgent.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgent()
```


### BedrockFlowVersionDefinitionNodesConfigurationCondition <a name="BedrockFlowVersionDefinitionNodesConfigurationCondition" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationCondition.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationCondition()
```


### BedrockFlowVersionDefinitionNodesConfigurationConditionConditions <a name="BedrockFlowVersionDefinitionNodesConfigurationConditionConditions" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditions.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditions()
```


### BedrockFlowVersionDefinitionNodesConfigurationInlineCode <a name="BedrockFlowVersionDefinitionNodesConfigurationInlineCode" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCode.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCode()
```


### BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase <a name="BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase()
```


### BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration()
```


### BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction <a name="BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction()
```


### BedrockFlowVersionDefinitionNodesConfigurationLex <a name="BedrockFlowVersionDefinitionNodesConfigurationLex" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLex.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLex()
```


### BedrockFlowVersionDefinitionNodesConfigurationPrompt <a name="BedrockFlowVersionDefinitionNodesConfigurationPrompt" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPrompt.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPrompt()
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration()
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration()
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline()
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration()
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText()
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration()
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText()
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables()
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource()
```


### BedrockFlowVersionDefinitionNodesConfigurationRetrieval <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrieval" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrieval.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrieval()
```


### BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration()
```


### BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3()
```


### BedrockFlowVersionDefinitionNodesConfigurationStorage <a name="BedrockFlowVersionDefinitionNodesConfigurationStorage" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorage.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorage()
```


### BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration()
```


### BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 <a name="BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3()
```


### BedrockFlowVersionDefinitionNodesInputs <a name="BedrockFlowVersionDefinitionNodesInputs" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputs.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputs()
```


### BedrockFlowVersionDefinitionNodesOutputs <a name="BedrockFlowVersionDefinitionNodesOutputs" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputs()
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference <a name="BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditional">BedrockFlowVersionDefinitionConnectionsConfigurationConditional</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionConnectionsConfigurationConditional
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditional">BedrockFlowVersionDefinitionConnectionsConfigurationConditional</a>

---


### BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference <a name="BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.sourceOutput">source_output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationData">BedrockFlowVersionDefinitionConnectionsConfigurationData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_output`<sup>Required</sup> <a name="source_output" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.sourceOutput"></a>

```python
source_output: str
```

- *Type:* str

---

##### `target_input`<sup>Required</sup> <a name="target_input" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionConnectionsConfigurationData
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationData">BedrockFlowVersionDefinitionConnectionsConfigurationData</a>

---


### BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference <a name="BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.conditional">conditional</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.data">data</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfiguration">BedrockFlowVersionDefinitionConnectionsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditional`<sup>Required</sup> <a name="conditional" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.conditional"></a>

```python
conditional: BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.data"></a>

```python
data: BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionConnectionsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfiguration">BedrockFlowVersionDefinitionConnectionsConfiguration</a>

---


### BedrockFlowVersionDefinitionConnectionsList <a name="BedrockFlowVersionDefinitionConnectionsList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockFlowVersionDefinitionConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockFlowVersionDefinitionConnectionsOutputReference <a name="BedrockFlowVersionDefinitionConnectionsOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnections">BedrockFlowVersionDefinitionConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.configuration"></a>

```python
configuration: BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionConnections
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnections">BedrockFlowVersionDefinitionConnections</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.agentAliasArn">agent_alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgent">BedrockFlowVersionDefinitionNodesConfigurationAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_alias_arn`<sup>Required</sup> <a name="agent_alias_arn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.agentAliasArn"></a>

```python
agent_alias_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgent">BedrockFlowVersionDefinitionNodesConfigurationAgent</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList <a name="BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditions">BedrockFlowVersionDefinitionNodesConfigurationConditionConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationConditionConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditions">BedrockFlowVersionDefinitionNodesConfigurationConditionConditions</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList">BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationCondition">BedrockFlowVersionDefinitionNodesConfigurationCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.conditions"></a>

```python
conditions: BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList">BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationCondition">BedrockFlowVersionDefinitionNodesConfigurationCondition</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCode">BedrockFlowVersionDefinitionNodesConfigurationInlineCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationInlineCode
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCode">BedrockFlowVersionDefinitionNodesConfigurationInlineCode</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guardrail_identifier`<sup>Required</sup> <a name="guardrail_identifier" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```python
guardrail_identifier: str
```

- *Type:* str

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.guardrailConfiguration">guardrail_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guardrail_configuration`<sup>Required</sup> <a name="guardrail_configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.guardrailConfiguration"></a>

```python
guardrail_configuration: BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference</a>

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction">BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction">BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.botAliasArn">bot_alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.localeId">locale_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLex">BedrockFlowVersionDefinitionNodesConfigurationLex</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bot_alias_arn`<sup>Required</sup> <a name="bot_alias_arn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.botAliasArn"></a>

```python
bot_alias_arn: str
```

- *Type:* str

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationLex
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLex">BedrockFlowVersionDefinitionNodesConfigurationLex</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference">BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.collector">collector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference">BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.inlineCode">inline_code</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference">BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.iterator">iterator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.knowledgeBase">knowledge_base</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lambdaFunction">lambda_function</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference">BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lex">lex</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference">BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.output">output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.retrieval">retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfiguration">BedrockFlowVersionDefinitionNodesConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.agent"></a>

```python
agent: BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference">BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference</a>

---

##### `collector`<sup>Required</sup> <a name="collector" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.collector"></a>

```python
collector: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.condition"></a>

```python
condition: BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference">BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference</a>

---

##### `inline_code`<sup>Required</sup> <a name="inline_code" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.inlineCode"></a>

```python
inline_code: BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference">BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference</a>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `iterator`<sup>Required</sup> <a name="iterator" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.iterator"></a>

```python
iterator: str
```

- *Type:* str

---

##### `knowledge_base`<sup>Required</sup> <a name="knowledge_base" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.knowledgeBase"></a>

```python
knowledge_base: BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference</a>

---

##### `lambda_function`<sup>Required</sup> <a name="lambda_function" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lambdaFunction"></a>

```python
lambda_function: BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference">BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference</a>

---

##### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lex"></a>

```python
lex: BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference">BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.output"></a>

```python
output: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.prompt"></a>

```python
prompt: BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference</a>

---

##### `retrieval`<sup>Required</sup> <a name="retrieval" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.retrieval"></a>

```python
retrieval: BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.storage"></a>

```python
storage: BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfiguration">BedrockFlowVersionDefinitionNodesConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guardrail_identifier`<sup>Required</sup> <a name="guardrail_identifier" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```python
guardrail_identifier: str
```

- *Type:* str

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.guardrailConfiguration">guardrail_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.sourceConfiguration">source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPrompt">BedrockFlowVersionDefinitionNodesConfigurationPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guardrail_configuration`<sup>Required</sup> <a name="guardrail_configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.guardrailConfiguration"></a>

```python
guardrail_configuration: BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference</a>

---

##### `source_configuration`<sup>Required</sup> <a name="source_configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.sourceConfiguration"></a>

```python
source_configuration: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPrompt">BedrockFlowVersionDefinitionNodesConfigurationPrompt</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.text"></a>

```python
text: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.stopSequences">stop_sequences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_sequences`<sup>Required</sup> <a name="stop_sequences" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```python
stop_sequences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.inferenceConfiguration">inference_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateType">template_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inference_configuration`<sup>Required</sup> <a name="inference_configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.inferenceConfiguration"></a>

```python
inference_configuration: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference</a>

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateConfiguration"></a>

```python
template_configuration: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference</a>

---

##### `template_type`<sup>Required</sup> <a name="template_type" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateType"></a>

```python
template_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.text"></a>

```python
text: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```python
input_variables: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.inline">inline</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.inline"></a>

```python
inline: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.resource"></a>

```python
resource: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.promptArn">prompt_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prompt_arn`<sup>Required</sup> <a name="prompt_arn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.promptArn"></a>

```python
prompt_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.serviceConfiguration">service_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrieval">BedrockFlowVersionDefinitionNodesConfigurationRetrieval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_configuration`<sup>Required</sup> <a name="service_configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.serviceConfiguration"></a>

```python
service_configuration: BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationRetrieval
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrieval">BedrockFlowVersionDefinitionNodesConfigurationRetrieval</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.s3"></a>

```python
s3: BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.serviceConfiguration">service_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorage">BedrockFlowVersionDefinitionNodesConfigurationStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_configuration`<sup>Required</sup> <a name="service_configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.serviceConfiguration"></a>

```python
service_configuration: BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorage">BedrockFlowVersionDefinitionNodesConfigurationStorage</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.s3"></a>

```python
s3: BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3</a>

---


### BedrockFlowVersionDefinitionNodesInputsList <a name="BedrockFlowVersionDefinitionNodesInputsList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockFlowVersionDefinitionNodesInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockFlowVersionDefinitionNodesInputsOutputReference <a name="BedrockFlowVersionDefinitionNodesInputsOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputs">BedrockFlowVersionDefinitionNodesInputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesInputs
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputs">BedrockFlowVersionDefinitionNodesInputs</a>

---


### BedrockFlowVersionDefinitionNodesList <a name="BedrockFlowVersionDefinitionNodesList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockFlowVersionDefinitionNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockFlowVersionDefinitionNodesOutputReference <a name="BedrockFlowVersionDefinitionNodesOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.inputs">inputs</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList">BedrockFlowVersionDefinitionNodesInputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList">BedrockFlowVersionDefinitionNodesOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodes">BedrockFlowVersionDefinitionNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.configuration"></a>

```python
configuration: BedrockFlowVersionDefinitionNodesConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationOutputReference</a>

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.inputs"></a>

```python
inputs: BedrockFlowVersionDefinitionNodesInputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList">BedrockFlowVersionDefinitionNodesInputsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.outputs"></a>

```python
outputs: BedrockFlowVersionDefinitionNodesOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList">BedrockFlowVersionDefinitionNodesOutputsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodes
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodes">BedrockFlowVersionDefinitionNodes</a>

---


### BedrockFlowVersionDefinitionNodesOutputsList <a name="BedrockFlowVersionDefinitionNodesOutputsList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockFlowVersionDefinitionNodesOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockFlowVersionDefinitionNodesOutputsOutputReference <a name="BedrockFlowVersionDefinitionNodesOutputsOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputs">BedrockFlowVersionDefinitionNodesOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinitionNodesOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputs">BedrockFlowVersionDefinitionNodesOutputs</a>

---


### BedrockFlowVersionDefinitionOutputReference <a name="BedrockFlowVersionDefinitionOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_flow_version

bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList">BedrockFlowVersionDefinitionConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList">BedrockFlowVersionDefinitionNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinition">BedrockFlowVersionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.connections"></a>

```python
connections: BedrockFlowVersionDefinitionConnectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList">BedrockFlowVersionDefinitionConnectionsList</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.nodes"></a>

```python
nodes: BedrockFlowVersionDefinitionNodesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList">BedrockFlowVersionDefinitionNodesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: BedrockFlowVersionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinition">BedrockFlowVersionDefinition</a>

---



