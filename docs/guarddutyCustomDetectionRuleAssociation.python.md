# `guarddutyCustomDetectionRuleAssociation` Submodule <a name="`guarddutyCustomDetectionRuleAssociation` Submodule" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyCustomDetectionRuleAssociation <a name="GuarddutyCustomDetectionRuleAssociation" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association awscc_guardduty_custom_detection_rule_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_custom_detection_rule_association

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mode: str,
  rule_id: str,
  tags: IResolvable | typing.List[GuarddutyCustomDetectionRuleAssociationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Whether the rule runs in LIVE mode (generates findings) or DRY_RUN mode (evaluates without generating findings). |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.ruleId">rule_id</a></code> | <code>str</code> | The catalog identifier of the custom detection rule to associate. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>]</code> | The tags applied to the association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.mode"></a>

- *Type:* str

Whether the rule runs in LIVE mode (generates findings) or DRY_RUN mode (evaluates without generating findings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#mode GuarddutyCustomDetectionRuleAssociation#mode}

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.ruleId"></a>

- *Type:* str

The catalog identifier of the custom detection rule to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#rule_id GuarddutyCustomDetectionRuleAssociation#rule_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>]

The tags applied to the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#tags GuarddutyCustomDetectionRuleAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GuarddutyCustomDetectionRuleAssociationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import guardduty_custom_detection_rule_association

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import guardduty_custom_detection_rule_association

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import guardduty_custom_detection_rule_association

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import guardduty_custom_detection_rule_association

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GuarddutyCustomDetectionRuleAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GuarddutyCustomDetectionRuleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyCustomDetectionRuleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList">GuarddutyCustomDetectionRuleAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tags"></a>

```python
tags: GuarddutyCustomDetectionRuleAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList">GuarddutyCustomDetectionRuleAssociationTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GuarddutyCustomDetectionRuleAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyCustomDetectionRuleAssociationConfig <a name="GuarddutyCustomDetectionRuleAssociationConfig" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_custom_detection_rule_association

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mode: str,
  rule_id: str,
  tags: IResolvable | typing.List[GuarddutyCustomDetectionRuleAssociationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.mode">mode</a></code> | <code>str</code> | Whether the rule runs in LIVE mode (generates findings) or DRY_RUN mode (evaluates without generating findings). |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.ruleId">rule_id</a></code> | <code>str</code> | The catalog identifier of the custom detection rule to associate. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>]</code> | The tags applied to the association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Whether the rule runs in LIVE mode (generates findings) or DRY_RUN mode (evaluates without generating findings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#mode GuarddutyCustomDetectionRuleAssociation#mode}

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

The catalog identifier of the custom detection rule to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#rule_id GuarddutyCustomDetectionRuleAssociation#rule_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GuarddutyCustomDetectionRuleAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>]

The tags applied to the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#tags GuarddutyCustomDetectionRuleAssociation#tags}

---

### GuarddutyCustomDetectionRuleAssociationTags <a name="GuarddutyCustomDetectionRuleAssociationTags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_custom_detection_rule_association

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#key GuarddutyCustomDetectionRuleAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#value GuarddutyCustomDetectionRuleAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#key GuarddutyCustomDetectionRuleAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#value GuarddutyCustomDetectionRuleAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyCustomDetectionRuleAssociationTagsList <a name="GuarddutyCustomDetectionRuleAssociationTagsList" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_custom_detection_rule_association

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GuarddutyCustomDetectionRuleAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GuarddutyCustomDetectionRuleAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>]

---


### GuarddutyCustomDetectionRuleAssociationTagsOutputReference <a name="GuarddutyCustomDetectionRuleAssociationTagsOutputReference" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_custom_detection_rule_association

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyCustomDetectionRuleAssociationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>

---



