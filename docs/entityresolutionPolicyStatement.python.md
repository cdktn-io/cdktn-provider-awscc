# `entityresolutionPolicyStatement` Submodule <a name="`entityresolutionPolicyStatement` Submodule" id="@cdktn/provider-awscc.entityresolutionPolicyStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionPolicyStatement <a name="EntityresolutionPolicyStatement" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement awscc_entityresolution_policy_statement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_policy_statement

entityresolutionPolicyStatement.EntityresolutionPolicyStatement(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arn: str,
  statement_id: str,
  action: typing.List[str] = None,
  condition: str = None,
  effect: str = None,
  principal: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Arn of the resource to which the policy statement is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.statementId">statement_id</a></code> | <code>str</code> | The Statement Id of the policy statement that is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.action">action</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.principal">principal</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.arn"></a>

- *Type:* str

Arn of the resource to which the policy statement is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#arn EntityresolutionPolicyStatement#arn}

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.statementId"></a>

- *Type:* str

The Statement Id of the policy statement that is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#statement_id EntityresolutionPolicyStatement#statement_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.action"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.condition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}.

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.effect"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.principal"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetEffect">reset_effect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_effect` <a name="reset_effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetEffect"></a>

```python
def reset_effect() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetPrincipal"></a>

```python
def reset_principal() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EntityresolutionPolicyStatement resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct"></a>

```python
from cdktn_provider_awscc import entityresolution_policy_statement

entityresolutionPolicyStatement.EntityresolutionPolicyStatement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement"></a>

```python
from cdktn_provider_awscc import entityresolution_policy_statement

entityresolutionPolicyStatement.EntityresolutionPolicyStatement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource"></a>

```python
from cdktn_provider_awscc import entityresolution_policy_statement

entityresolutionPolicyStatement.EntityresolutionPolicyStatement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import entityresolution_policy_statement

entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EntityresolutionPolicyStatement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EntityresolutionPolicyStatement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EntityresolutionPolicyStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionPolicyStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.actionInput">action_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principalInput">principal_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementIdInput">statement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.action">action</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principal">principal</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementId">statement_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.actionInput"></a>

```python
action_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principalInput"></a>

```python
principal_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `statement_id_input`<sup>Optional</sup> <a name="statement_id_input" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementIdInput"></a>

```python
statement_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.action"></a>

```python
action: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principal"></a>

```python
principal: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementId"></a>

```python
statement_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionPolicyStatementConfig <a name="EntityresolutionPolicyStatementConfig" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_policy_statement

entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arn: str,
  statement_id: str,
  action: typing.List[str] = None,
  condition: str = None,
  effect: str = None,
  principal: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.arn">arn</a></code> | <code>str</code> | Arn of the resource to which the policy statement is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.statementId">statement_id</a></code> | <code>str</code> | The Statement Id of the policy statement that is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.action">action</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.principal">principal</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Arn of the resource to which the policy statement is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#arn EntityresolutionPolicyStatement#arn}

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.statementId"></a>

```python
statement_id: str
```

- *Type:* str

The Statement Id of the policy statement that is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#statement_id EntityresolutionPolicyStatement#statement_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.action"></a>

```python
action: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}.

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.principal"></a>

```python
principal: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}.

---



