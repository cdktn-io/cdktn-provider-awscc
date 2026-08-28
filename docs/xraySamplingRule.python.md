# `xraySamplingRule` Submodule <a name="`xraySamplingRule` Submodule" id="@cdktn/provider-awscc.xraySamplingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XraySamplingRule <a name="XraySamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule awscc_xray_sampling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rule_name: str = None,
  sampling_rule: XraySamplingRuleSamplingRule = None,
  sampling_rule_record: XraySamplingRuleSamplingRuleRecord = None,
  sampling_rule_update: XraySamplingRuleSamplingRuleUpdate = None,
  tags: IResolvable | typing.List[XraySamplingRuleTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRule">sampling_rule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRuleRecord">sampling_rule_record</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRuleUpdate">sampling_rule_update</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.ruleName"></a>

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `sampling_rule`<sup>Optional</sup> <a name="sampling_rule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

##### `sampling_rule_record`<sup>Optional</sup> <a name="sampling_rule_record" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRuleRecord"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}.

---

##### `sampling_rule_update`<sup>Optional</sup> <a name="sampling_rule_update" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRuleUpdate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#tags XraySamplingRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule">put_sampling_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord">put_sampling_rule_record</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate">put_sampling_rule_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRule">reset_sampling_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleRecord">reset_sampling_rule_record</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleUpdate">reset_sampling_rule_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sampling_rule` <a name="put_sampling_rule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule"></a>

```python
def put_sampling_rule(
  attributes: typing.Mapping[str] = None,
  fixed_rate: typing.Union[int, float] = None,
  host: str = None,
  http_method: str = None,
  priority: typing.Union[int, float] = None,
  reservoir_size: typing.Union[int, float] = None,
  resource_arn: str = None,
  rule_arn: str = None,
  rule_name: str = None,
  sampling_rate_boost: XraySamplingRuleSamplingRuleSamplingRateBoost = None,
  service_name: str = None,
  service_type: str = None,
  url_path: str = None,
  version: typing.Union[int, float] = None
) -> None
```

###### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

###### `fixed_rate`<sup>Optional</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.fixedRate"></a>

- *Type:* typing.Union[int, float]

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.host"></a>

- *Type:* str

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

###### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.httpMethod"></a>

- *Type:* str

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

###### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

###### `reservoir_size`<sup>Optional</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.reservoirSize"></a>

- *Type:* typing.Union[int, float]

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

###### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.resourceArn"></a>

- *Type:* str

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

###### `rule_arn`<sup>Optional</sup> <a name="rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.ruleArn"></a>

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

###### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.ruleName"></a>

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

###### `sampling_rate_boost`<sup>Optional</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.samplingRateBoost"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

###### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.serviceName"></a>

- *Type:* str

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

###### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.serviceType"></a>

- *Type:* str

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

###### `url_path`<sup>Optional</sup> <a name="url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.urlPath"></a>

- *Type:* str

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.version"></a>

- *Type:* typing.Union[int, float]

The version of the sampling rule format (1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}

---

##### `put_sampling_rule_record` <a name="put_sampling_rule_record" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord"></a>

```python
def put_sampling_rule_record(
  created_at: str = None,
  modified_at: str = None,
  sampling_rule: XraySamplingRuleSamplingRuleRecordSamplingRule = None
) -> None
```

###### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord.parameter.createdAt"></a>

- *Type:* str

When the rule was created, in Unix time seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#created_at XraySamplingRule#created_at}

---

###### `modified_at`<sup>Optional</sup> <a name="modified_at" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord.parameter.modifiedAt"></a>

- *Type:* str

When the rule was modified, in Unix time seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#modified_at XraySamplingRule#modified_at}

---

###### `sampling_rule`<sup>Optional</sup> <a name="sampling_rule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord.parameter.samplingRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

##### `put_sampling_rule_update` <a name="put_sampling_rule_update" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate"></a>

```python
def put_sampling_rule_update(
  attributes: typing.Mapping[str] = None,
  fixed_rate: typing.Union[int, float] = None,
  host: str = None,
  http_method: str = None,
  priority: typing.Union[int, float] = None,
  reservoir_size: typing.Union[int, float] = None,
  resource_arn: str = None,
  rule_arn: str = None,
  rule_name: str = None,
  sampling_rate_boost: XraySamplingRuleSamplingRuleUpdateSamplingRateBoost = None,
  service_name: str = None,
  service_type: str = None,
  url_path: str = None
) -> None
```

###### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

###### `fixed_rate`<sup>Optional</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.fixedRate"></a>

- *Type:* typing.Union[int, float]

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.host"></a>

- *Type:* str

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

###### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.httpMethod"></a>

- *Type:* str

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

###### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

###### `reservoir_size`<sup>Optional</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.reservoirSize"></a>

- *Type:* typing.Union[int, float]

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

###### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.resourceArn"></a>

- *Type:* str

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

###### `rule_arn`<sup>Optional</sup> <a name="rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.ruleArn"></a>

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

###### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.ruleName"></a>

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

###### `sampling_rate_boost`<sup>Optional</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.samplingRateBoost"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

###### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.serviceName"></a>

- *Type:* str

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

###### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.serviceType"></a>

- *Type:* str

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

###### `url_path`<sup>Optional</sup> <a name="url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.urlPath"></a>

- *Type:* str

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[XraySamplingRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>]

---

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_sampling_rule` <a name="reset_sampling_rule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRule"></a>

```python
def reset_sampling_rule() -> None
```

##### `reset_sampling_rule_record` <a name="reset_sampling_rule_record" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleRecord"></a>

```python
def reset_sampling_rule_record() -> None
```

##### `reset_sampling_rule_update` <a name="reset_sampling_rule_update" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleUpdate"></a>

```python
def reset_sampling_rule_update() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a XraySamplingRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a XraySamplingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the XraySamplingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing XraySamplingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the XraySamplingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRule">sampling_rule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference">XraySamplingRuleSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecord">sampling_rule_record</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference">XraySamplingRuleSamplingRuleRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdate">sampling_rule_update</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference">XraySamplingRuleSamplingRuleUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList">XraySamplingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleInput">sampling_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecordInput">sampling_rule_record_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdateInput">sampling_rule_update_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `sampling_rule`<sup>Required</sup> <a name="sampling_rule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRule"></a>

```python
sampling_rule: XraySamplingRuleSamplingRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference">XraySamplingRuleSamplingRuleOutputReference</a>

---

##### `sampling_rule_record`<sup>Required</sup> <a name="sampling_rule_record" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecord"></a>

```python
sampling_rule_record: XraySamplingRuleSamplingRuleRecordOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference">XraySamplingRuleSamplingRuleRecordOutputReference</a>

---

##### `sampling_rule_update`<sup>Required</sup> <a name="sampling_rule_update" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdate"></a>

```python
sampling_rule_update: XraySamplingRuleSamplingRuleUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference">XraySamplingRuleSamplingRuleUpdateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tags"></a>

```python
tags: XraySamplingRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList">XraySamplingRuleTagsList</a>

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `sampling_rule_input`<sup>Optional</sup> <a name="sampling_rule_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleInput"></a>

```python
sampling_rule_input: IResolvable | XraySamplingRuleSamplingRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---

##### `sampling_rule_record_input`<sup>Optional</sup> <a name="sampling_rule_record_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecordInput"></a>

```python
sampling_rule_record_input: IResolvable | XraySamplingRuleSamplingRuleRecord
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---

##### `sampling_rule_update_input`<sup>Optional</sup> <a name="sampling_rule_update_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdateInput"></a>

```python
sampling_rule_update_input: IResolvable | XraySamplingRuleSamplingRuleUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[XraySamplingRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### XraySamplingRuleConfig <a name="XraySamplingRuleConfig" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rule_name: str = None,
  sampling_rule: XraySamplingRuleSamplingRule = None,
  sampling_rule_record: XraySamplingRuleSamplingRuleRecord = None,
  sampling_rule_update: XraySamplingRuleSamplingRuleUpdate = None,
  tags: IResolvable | typing.List[XraySamplingRuleTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRule">sampling_rule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleRecord">sampling_rule_record</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleUpdate">sampling_rule_update</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `sampling_rule`<sup>Optional</sup> <a name="sampling_rule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRule"></a>

```python
sampling_rule: XraySamplingRuleSamplingRule
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

##### `sampling_rule_record`<sup>Optional</sup> <a name="sampling_rule_record" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleRecord"></a>

```python
sampling_rule_record: XraySamplingRuleSamplingRuleRecord
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}.

---

##### `sampling_rule_update`<sup>Optional</sup> <a name="sampling_rule_update" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleUpdate"></a>

```python
sampling_rule_update: XraySamplingRuleSamplingRuleUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[XraySamplingRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#tags XraySamplingRule#tags}

---

### XraySamplingRuleSamplingRule <a name="XraySamplingRuleSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRule(
  attributes: typing.Mapping[str] = None,
  fixed_rate: typing.Union[int, float] = None,
  host: str = None,
  http_method: str = None,
  priority: typing.Union[int, float] = None,
  reservoir_size: typing.Union[int, float] = None,
  resource_arn: str = None,
  rule_arn: str = None,
  rule_name: str = None,
  sampling_rate_boost: XraySamplingRuleSamplingRuleSamplingRateBoost = None,
  service_name: str = None,
  service_type: str = None,
  url_path: str = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.host">host</a></code> | <code>str</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.httpMethod">http_method</a></code> | <code>str</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.resourceArn">resource_arn</a></code> | <code>str</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleArn">rule_arn</a></code> | <code>str</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleName">rule_name</a></code> | <code>str</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.samplingRateBoost">sampling_rate_boost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceName">service_name</a></code> | <code>str</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceType">service_type</a></code> | <code>str</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.urlPath">url_path</a></code> | <code>str</code> | Matches the path from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.version">version</a></code> | <code>typing.Union[int, float]</code> | The version of the sampling rule format (1). |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `fixed_rate`<sup>Optional</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.host"></a>

```python
host: str
```

- *Type:* str

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `reservoir_size`<sup>Optional</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `rule_arn`<sup>Optional</sup> <a name="rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `sampling_rate_boost`<sup>Optional</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.samplingRateBoost"></a>

```python
sampling_rate_boost: XraySamplingRuleSamplingRuleSamplingRateBoost
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `url_path`<sup>Optional</sup> <a name="url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The version of the sampling rule format (1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}

---

### XraySamplingRuleSamplingRuleRecord <a name="XraySamplingRuleSamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleRecord(
  created_at: str = None,
  modified_at: str = None,
  sampling_rule: XraySamplingRuleSamplingRuleRecordSamplingRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.createdAt">created_at</a></code> | <code>str</code> | When the rule was created, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.modifiedAt">modified_at</a></code> | <code>str</code> | When the rule was modified, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.samplingRule">sampling_rule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}. |

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

When the rule was created, in Unix time seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#created_at XraySamplingRule#created_at}

---

##### `modified_at`<sup>Optional</sup> <a name="modified_at" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

When the rule was modified, in Unix time seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#modified_at XraySamplingRule#modified_at}

---

##### `sampling_rule`<sup>Optional</sup> <a name="sampling_rule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.samplingRule"></a>

```python
sampling_rule: XraySamplingRuleSamplingRuleRecordSamplingRule
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

### XraySamplingRuleSamplingRuleRecordSamplingRule <a name="XraySamplingRuleSamplingRuleRecordSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule(
  attributes: typing.Mapping[str] = None,
  fixed_rate: typing.Union[int, float] = None,
  host: str = None,
  http_method: str = None,
  priority: typing.Union[int, float] = None,
  reservoir_size: typing.Union[int, float] = None,
  resource_arn: str = None,
  rule_arn: str = None,
  rule_name: str = None,
  sampling_rate_boost: XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost = None,
  service_name: str = None,
  service_type: str = None,
  url_path: str = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.host">host</a></code> | <code>str</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod">http_method</a></code> | <code>str</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn">resource_arn</a></code> | <code>str</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn">rule_arn</a></code> | <code>str</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleName">rule_name</a></code> | <code>str</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.samplingRateBoost">sampling_rate_boost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceName">service_name</a></code> | <code>str</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceType">service_type</a></code> | <code>str</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.urlPath">url_path</a></code> | <code>str</code> | Matches the path from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.version">version</a></code> | <code>typing.Union[int, float]</code> | The version of the sampling rule format (1). |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `fixed_rate`<sup>Optional</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.host"></a>

```python
host: str
```

- *Type:* str

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `reservoir_size`<sup>Optional</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `rule_arn`<sup>Optional</sup> <a name="rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `sampling_rate_boost`<sup>Optional</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.samplingRateBoost"></a>

```python
sampling_rate_boost: XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `url_path`<sup>Optional</sup> <a name="url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The version of the sampling rule format (1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}

---

### XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost(
  cooldown_window_minutes: typing.Union[int, float] = None,
  max_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes">cooldown_window_minutes</a></code> | <code>typing.Union[int, float]</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `cooldown_window_minutes`<sup>Optional</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes"></a>

```python
cooldown_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `max_rate`<sup>Optional</sup> <a name="max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleSamplingRuleSamplingRateBoost <a name="XraySamplingRuleSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost(
  cooldown_window_minutes: typing.Union[int, float] = None,
  max_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes">cooldown_window_minutes</a></code> | <code>typing.Union[int, float]</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `cooldown_window_minutes`<sup>Optional</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes"></a>

```python
cooldown_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `max_rate`<sup>Optional</sup> <a name="max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleSamplingRuleUpdate <a name="XraySamplingRuleSamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleUpdate(
  attributes: typing.Mapping[str] = None,
  fixed_rate: typing.Union[int, float] = None,
  host: str = None,
  http_method: str = None,
  priority: typing.Union[int, float] = None,
  reservoir_size: typing.Union[int, float] = None,
  resource_arn: str = None,
  rule_arn: str = None,
  rule_name: str = None,
  sampling_rate_boost: XraySamplingRuleSamplingRuleUpdateSamplingRateBoost = None,
  service_name: str = None,
  service_type: str = None,
  url_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.host">host</a></code> | <code>str</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.httpMethod">http_method</a></code> | <code>str</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.resourceArn">resource_arn</a></code> | <code>str</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleArn">rule_arn</a></code> | <code>str</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleName">rule_name</a></code> | <code>str</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.samplingRateBoost">sampling_rate_boost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceName">service_name</a></code> | <code>str</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceType">service_type</a></code> | <code>str</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.urlPath">url_path</a></code> | <code>str</code> | Matches the path from a request URL. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `fixed_rate`<sup>Optional</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.host"></a>

```python
host: str
```

- *Type:* str

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `reservoir_size`<sup>Optional</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `rule_arn`<sup>Optional</sup> <a name="rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `sampling_rate_boost`<sup>Optional</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.samplingRateBoost"></a>

```python
sampling_rate_boost: XraySamplingRuleSamplingRuleUpdateSamplingRateBoost
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `url_path`<sup>Optional</sup> <a name="url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

### XraySamplingRuleSamplingRuleUpdateSamplingRateBoost <a name="XraySamplingRuleSamplingRuleUpdateSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost(
  cooldown_window_minutes: typing.Union[int, float] = None,
  max_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.cooldownWindowMinutes">cooldown_window_minutes</a></code> | <code>typing.Union[int, float]</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `cooldown_window_minutes`<sup>Optional</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.cooldownWindowMinutes"></a>

```python
cooldown_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `max_rate`<sup>Optional</sup> <a name="max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleTags <a name="XraySamplingRuleTags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#key XraySamplingRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#value XraySamplingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### XraySamplingRuleSamplingRuleOutputReference <a name="XraySamplingRuleSamplingRuleOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost">put_sampling_rate_boost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetFixedRate">reset_fixed_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetReservoirSize">reset_reservoir_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleArn">reset_rule_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetSamplingRateBoost">reset_sampling_rate_boost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceType">reset_service_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetUrlPath">reset_url_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sampling_rate_boost` <a name="put_sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost"></a>

```python
def put_sampling_rate_boost(
  cooldown_window_minutes: typing.Union[int, float] = None,
  max_rate: typing.Union[int, float] = None
) -> None
```

###### `cooldown_window_minutes`<sup>Optional</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost.parameter.cooldownWindowMinutes"></a>

- *Type:* typing.Union[int, float]

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

###### `max_rate`<sup>Optional</sup> <a name="max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost.parameter.maxRate"></a>

- *Type:* typing.Union[int, float]

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_fixed_rate` <a name="reset_fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetFixedRate"></a>

```python
def reset_fixed_rate() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_reservoir_size` <a name="reset_reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetReservoirSize"></a>

```python
def reset_reservoir_size() -> None
```

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```

##### `reset_rule_arn` <a name="reset_rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleArn"></a>

```python
def reset_rule_arn() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_sampling_rate_boost` <a name="reset_sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetSamplingRateBoost"></a>

```python
def reset_sampling_rate_boost() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_service_type` <a name="reset_service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceType"></a>

```python
def reset_service_type() -> None
```

##### `reset_url_path` <a name="reset_url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetUrlPath"></a>

```python
def reset_url_path() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost">sampling_rate_boost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRateInput">fixed_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSizeInput">reservoir_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArnInput">rule_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoostInput">sampling_rate_boost_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPathInput">url_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sampling_rate_boost`<sup>Required</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost"></a>

```python
sampling_rate_boost: XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fixed_rate_input`<sup>Optional</sup> <a name="fixed_rate_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRateInput"></a>

```python
fixed_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size_input`<sup>Optional</sup> <a name="reservoir_size_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSizeInput"></a>

```python
reservoir_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `rule_arn_input`<sup>Optional</sup> <a name="rule_arn_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArnInput"></a>

```python
rule_arn_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `sampling_rate_boost_input`<sup>Optional</sup> <a name="sampling_rate_boost_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoostInput"></a>

```python
sampling_rate_boost_input: IResolvable | XraySamplingRuleSamplingRuleSamplingRateBoost
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `url_path_input`<sup>Optional</sup> <a name="url_path_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPathInput"></a>

```python
url_path_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fixed_rate`<sup>Required</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size`<sup>Required</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | XraySamplingRuleSamplingRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---


### XraySamplingRuleSamplingRuleRecordOutputReference <a name="XraySamplingRuleSamplingRuleRecordOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule">put_sampling_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetModifiedAt">reset_modified_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetSamplingRule">reset_sampling_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sampling_rule` <a name="put_sampling_rule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule"></a>

```python
def put_sampling_rule(
  attributes: typing.Mapping[str] = None,
  fixed_rate: typing.Union[int, float] = None,
  host: str = None,
  http_method: str = None,
  priority: typing.Union[int, float] = None,
  reservoir_size: typing.Union[int, float] = None,
  resource_arn: str = None,
  rule_arn: str = None,
  rule_name: str = None,
  sampling_rate_boost: XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost = None,
  service_name: str = None,
  service_type: str = None,
  url_path: str = None,
  version: typing.Union[int, float] = None
) -> None
```

###### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

###### `fixed_rate`<sup>Optional</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.fixedRate"></a>

- *Type:* typing.Union[int, float]

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.host"></a>

- *Type:* str

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

###### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.httpMethod"></a>

- *Type:* str

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

###### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

###### `reservoir_size`<sup>Optional</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.reservoirSize"></a>

- *Type:* typing.Union[int, float]

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

###### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.resourceArn"></a>

- *Type:* str

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

###### `rule_arn`<sup>Optional</sup> <a name="rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.ruleArn"></a>

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

###### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.ruleName"></a>

- *Type:* str

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

###### `sampling_rate_boost`<sup>Optional</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.samplingRateBoost"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

###### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.serviceName"></a>

- *Type:* str

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

###### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.serviceType"></a>

- *Type:* str

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

###### `url_path`<sup>Optional</sup> <a name="url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.urlPath"></a>

- *Type:* str

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.version"></a>

- *Type:* typing.Union[int, float]

The version of the sampling rule format (1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}

---

##### `reset_created_at` <a name="reset_created_at" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_modified_at` <a name="reset_modified_at" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetModifiedAt"></a>

```python
def reset_modified_at() -> None
```

##### `reset_sampling_rule` <a name="reset_sampling_rule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetSamplingRule"></a>

```python
def reset_sampling_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule">sampling_rule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAtInput">created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAtInput">modified_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRuleInput">sampling_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sampling_rule`<sup>Required</sup> <a name="sampling_rule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule"></a>

```python
sampling_rule: XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a>

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAtInput"></a>

```python
created_at_input: str
```

- *Type:* str

---

##### `modified_at_input`<sup>Optional</sup> <a name="modified_at_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAtInput"></a>

```python
modified_at_input: str
```

- *Type:* str

---

##### `sampling_rule_input`<sup>Optional</sup> <a name="sampling_rule_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRuleInput"></a>

```python
sampling_rule_input: IResolvable | XraySamplingRuleSamplingRuleRecordSamplingRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | XraySamplingRuleSamplingRuleRecord
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---


### XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost">put_sampling_rate_boost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetFixedRate">reset_fixed_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetReservoirSize">reset_reservoir_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleArn">reset_rule_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetSamplingRateBoost">reset_sampling_rate_boost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceType">reset_service_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetUrlPath">reset_url_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sampling_rate_boost` <a name="put_sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost"></a>

```python
def put_sampling_rate_boost(
  cooldown_window_minutes: typing.Union[int, float] = None,
  max_rate: typing.Union[int, float] = None
) -> None
```

###### `cooldown_window_minutes`<sup>Optional</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost.parameter.cooldownWindowMinutes"></a>

- *Type:* typing.Union[int, float]

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

###### `max_rate`<sup>Optional</sup> <a name="max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost.parameter.maxRate"></a>

- *Type:* typing.Union[int, float]

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_fixed_rate` <a name="reset_fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetFixedRate"></a>

```python
def reset_fixed_rate() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_reservoir_size` <a name="reset_reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetReservoirSize"></a>

```python
def reset_reservoir_size() -> None
```

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```

##### `reset_rule_arn` <a name="reset_rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleArn"></a>

```python
def reset_rule_arn() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_sampling_rate_boost` <a name="reset_sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetSamplingRateBoost"></a>

```python
def reset_sampling_rate_boost() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_service_type` <a name="reset_service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceType"></a>

```python
def reset_service_type() -> None
```

##### `reset_url_path` <a name="reset_url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetUrlPath"></a>

```python
def reset_url_path() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost">sampling_rate_boost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRateInput">fixed_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSizeInput">reservoir_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArnInput">rule_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoostInput">sampling_rate_boost_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPathInput">url_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sampling_rate_boost`<sup>Required</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost"></a>

```python
sampling_rate_boost: XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fixed_rate_input`<sup>Optional</sup> <a name="fixed_rate_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRateInput"></a>

```python
fixed_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size_input`<sup>Optional</sup> <a name="reservoir_size_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSizeInput"></a>

```python
reservoir_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `rule_arn_input`<sup>Optional</sup> <a name="rule_arn_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArnInput"></a>

```python
rule_arn_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `sampling_rate_boost_input`<sup>Optional</sup> <a name="sampling_rate_boost_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoostInput"></a>

```python
sampling_rate_boost_input: IResolvable | XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `url_path_input`<sup>Optional</sup> <a name="url_path_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPathInput"></a>

```python
url_path_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fixed_rate`<sup>Required</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size`<sup>Required</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | XraySamplingRuleSamplingRuleRecordSamplingRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---


### XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes">reset_cooldown_window_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetMaxRate">reset_max_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooldown_window_minutes` <a name="reset_cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```python
def reset_cooldown_window_minutes() -> None
```

##### `reset_max_rate` <a name="reset_max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetMaxRate"></a>

```python
def reset_max_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">cooldown_window_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput">max_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldown_window_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_window_minutes_input`<sup>Optional</sup> <a name="cooldown_window_minutes_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```python
cooldown_window_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_input`<sup>Optional</sup> <a name="max_rate_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput"></a>

```python
max_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown_window_minutes`<sup>Required</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```python
cooldown_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate`<sup>Required</sup> <a name="max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---


### XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes">reset_cooldown_window_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetMaxRate">reset_max_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooldown_window_minutes` <a name="reset_cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```python
def reset_cooldown_window_minutes() -> None
```

##### `reset_max_rate` <a name="reset_max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetMaxRate"></a>

```python
def reset_max_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">cooldown_window_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput">max_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldown_window_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_window_minutes_input`<sup>Optional</sup> <a name="cooldown_window_minutes_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```python
cooldown_window_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_input`<sup>Optional</sup> <a name="max_rate_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput"></a>

```python
max_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown_window_minutes`<sup>Required</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```python
cooldown_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate`<sup>Required</sup> <a name="max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | XraySamplingRuleSamplingRuleSamplingRateBoost
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---


### XraySamplingRuleSamplingRuleUpdateOutputReference <a name="XraySamplingRuleSamplingRuleUpdateOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost">put_sampling_rate_boost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetFixedRate">reset_fixed_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetReservoirSize">reset_reservoir_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleArn">reset_rule_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetSamplingRateBoost">reset_sampling_rate_boost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceType">reset_service_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetUrlPath">reset_url_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sampling_rate_boost` <a name="put_sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost"></a>

```python
def put_sampling_rate_boost(
  cooldown_window_minutes: typing.Union[int, float] = None,
  max_rate: typing.Union[int, float] = None
) -> None
```

###### `cooldown_window_minutes`<sup>Optional</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost.parameter.cooldownWindowMinutes"></a>

- *Type:* typing.Union[int, float]

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

###### `max_rate`<sup>Optional</sup> <a name="max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost.parameter.maxRate"></a>

- *Type:* typing.Union[int, float]

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_fixed_rate` <a name="reset_fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetFixedRate"></a>

```python
def reset_fixed_rate() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_reservoir_size` <a name="reset_reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetReservoirSize"></a>

```python
def reset_reservoir_size() -> None
```

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```

##### `reset_rule_arn` <a name="reset_rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleArn"></a>

```python
def reset_rule_arn() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_sampling_rate_boost` <a name="reset_sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetSamplingRateBoost"></a>

```python
def reset_sampling_rate_boost() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_service_type` <a name="reset_service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceType"></a>

```python
def reset_service_type() -> None
```

##### `reset_url_path` <a name="reset_url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetUrlPath"></a>

```python
def reset_url_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost">sampling_rate_boost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRateInput">fixed_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSizeInput">reservoir_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArnInput">rule_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoostInput">sampling_rate_boost_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPathInput">url_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sampling_rate_boost`<sup>Required</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost"></a>

```python
sampling_rate_boost: XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fixed_rate_input`<sup>Optional</sup> <a name="fixed_rate_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRateInput"></a>

```python
fixed_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size_input`<sup>Optional</sup> <a name="reservoir_size_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSizeInput"></a>

```python
reservoir_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `rule_arn_input`<sup>Optional</sup> <a name="rule_arn_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArnInput"></a>

```python
rule_arn_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `sampling_rate_boost_input`<sup>Optional</sup> <a name="sampling_rate_boost_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoostInput"></a>

```python
sampling_rate_boost_input: IResolvable | XraySamplingRuleSamplingRuleUpdateSamplingRateBoost
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `url_path_input`<sup>Optional</sup> <a name="url_path_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPathInput"></a>

```python
url_path_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fixed_rate`<sup>Required</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size`<sup>Required</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | XraySamplingRuleSamplingRuleUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---


### XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetCooldownWindowMinutes">reset_cooldown_window_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetMaxRate">reset_max_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooldown_window_minutes` <a name="reset_cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```python
def reset_cooldown_window_minutes() -> None
```

##### `reset_max_rate` <a name="reset_max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetMaxRate"></a>

```python
def reset_max_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">cooldown_window_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRateInput">max_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldown_window_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_window_minutes_input`<sup>Optional</sup> <a name="cooldown_window_minutes_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```python
cooldown_window_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_input`<sup>Optional</sup> <a name="max_rate_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRateInput"></a>

```python
max_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cooldown_window_minutes`<sup>Required</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```python
cooldown_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate`<sup>Required</sup> <a name="max_rate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | XraySamplingRuleSamplingRuleUpdateSamplingRateBoost
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---


### XraySamplingRuleTagsList <a name="XraySamplingRuleTagsList" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> XraySamplingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[XraySamplingRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>]

---


### XraySamplingRuleTagsOutputReference <a name="XraySamplingRuleTagsOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import xray_sampling_rule

xraySamplingRule.XraySamplingRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | XraySamplingRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>

---



