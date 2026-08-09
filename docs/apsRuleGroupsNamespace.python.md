# `apsRuleGroupsNamespace` Submodule <a name="`apsRuleGroupsNamespace` Submodule" id="@cdktn/provider-awscc.apsRuleGroupsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsRuleGroupsNamespace <a name="ApsRuleGroupsNamespace" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace awscc_aps_rule_groups_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer"></a>

```python
from cdktn_provider_awscc import aps_rule_groups_namespace

apsRuleGroupsNamespace.ApsRuleGroupsNamespace(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data: str,
  name: str,
  workspace: str,
  tags: IResolvable | typing.List[ApsRuleGroupsNamespaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.data">data</a></code> | <code>str</code> | The RuleGroupsNamespace data. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.name">name</a></code> | <code>str</code> | The RuleGroupsNamespace name. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.workspace">workspace</a></code> | <code>str</code> | Required to identify a specific APS Workspace associated with this RuleGroupsNamespace. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.data"></a>

- *Type:* str

The RuleGroupsNamespace data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#data ApsRuleGroupsNamespace#data}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.name"></a>

- *Type:* str

The RuleGroupsNamespace name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#name ApsRuleGroupsNamespace#name}

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.workspace"></a>

- *Type:* str

Required to identify a specific APS Workspace associated with this RuleGroupsNamespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#workspace ApsRuleGroupsNamespace#workspace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#tags ApsRuleGroupsNamespace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApsRuleGroupsNamespaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApsRuleGroupsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isConstruct"></a>

```python
from cdktn_provider_awscc import aps_rule_groups_namespace

apsRuleGroupsNamespace.ApsRuleGroupsNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import aps_rule_groups_namespace

apsRuleGroupsNamespace.ApsRuleGroupsNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import aps_rule_groups_namespace

apsRuleGroupsNamespace.ApsRuleGroupsNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import aps_rule_groups_namespace

apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApsRuleGroupsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApsRuleGroupsNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApsRuleGroupsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApsRuleGroupsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList">ApsRuleGroupsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspaceInput">workspace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspace">workspace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tags"></a>

```python
tags: ApsRuleGroupsNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList">ApsRuleGroupsNamespaceTagsList</a>

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApsRuleGroupsNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>]

---

##### `workspace_input`<sup>Optional</sup> <a name="workspace_input" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspaceInput"></a>

```python
workspace_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApsRuleGroupsNamespaceConfig <a name="ApsRuleGroupsNamespaceConfig" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import aps_rule_groups_namespace

apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data: str,
  name: str,
  workspace: str,
  tags: IResolvable | typing.List[ApsRuleGroupsNamespaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.data">data</a></code> | <code>str</code> | The RuleGroupsNamespace data. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.name">name</a></code> | <code>str</code> | The RuleGroupsNamespace name. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.workspace">workspace</a></code> | <code>str</code> | Required to identify a specific APS Workspace associated with this RuleGroupsNamespace. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.data"></a>

```python
data: str
```

- *Type:* str

The RuleGroupsNamespace data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#data ApsRuleGroupsNamespace#data}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The RuleGroupsNamespace name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#name ApsRuleGroupsNamespace#name}

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

Required to identify a specific APS Workspace associated with this RuleGroupsNamespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#workspace ApsRuleGroupsNamespace#workspace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApsRuleGroupsNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#tags ApsRuleGroupsNamespace#tags}

---

### ApsRuleGroupsNamespaceTags <a name="ApsRuleGroupsNamespaceTags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import aps_rule_groups_namespace

apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#key ApsRuleGroupsNamespace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#value ApsRuleGroupsNamespace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsRuleGroupsNamespaceTagsList <a name="ApsRuleGroupsNamespaceTagsList" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import aps_rule_groups_namespace

apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApsRuleGroupsNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApsRuleGroupsNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>]

---


### ApsRuleGroupsNamespaceTagsOutputReference <a name="ApsRuleGroupsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_rule_groups_namespace

apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsRuleGroupsNamespaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>

---



