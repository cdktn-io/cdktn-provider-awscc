# `configConfigRule` Submodule <a name="`configConfigRule` Submodule" id="@cdktn/provider-awscc.configConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigRule <a name="ConfigConfigRule" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule awscc_config_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  source: ConfigConfigRuleSource,
  compliance: ConfigConfigRuleCompliance = None,
  config_rule_name: str = None,
  description: str = None,
  evaluation_modes: IResolvable | typing.List[ConfigConfigRuleEvaluationModes] = None,
  input_parameters: str = None,
  maximum_execution_frequency: str = None,
  scope: ConfigConfigRuleScope = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.compliance">compliance</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.configRuleName">config_rule_name</a></code> | <code>str</code> | A name for the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description that you provide for the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.evaluationModes">evaluation_modes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>]</code> | The modes the CC rule can be evaluated in. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.inputParameters">input_parameters</a></code> | <code>str</code> | A string, in JSON format, that is passed to the CC rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | The maximum frequency with which CC runs evaluations for a rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | Defines which resources can trigger an evaluation for the rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#source ConfigConfigRule#source}

---

##### `compliance`<sup>Optional</sup> <a name="compliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.compliance"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#compliance ConfigConfigRule#compliance}

---

##### `config_rule_name`<sup>Optional</sup> <a name="config_rule_name" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.configRuleName"></a>

- *Type:* str

A name for the CC rule.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the rule name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#config_rule_name ConfigConfigRule#config_rule_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.description"></a>

- *Type:* str

The description that you provide for the CC rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#description ConfigConfigRule#description}

---

##### `evaluation_modes`<sup>Optional</sup> <a name="evaluation_modes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.evaluationModes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>]

The modes the CC rule can be evaluated in.

The valid values are distinct objects. By default, the value is Detective evaluation mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#evaluation_modes ConfigConfigRule#evaluation_modes}

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.inputParameters"></a>

- *Type:* str

A string, in JSON format, that is passed to the CC rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#input_parameters ConfigConfigRule#input_parameters}

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.maximumExecutionFrequency"></a>

- *Type:* str

The maximum frequency with which CC runs evaluations for a rule.

You can specify a value for `MaximumExecutionFrequency` when:

* You are using an AWS managed rule that is triggered at a periodic frequency.
* Your custom rule is triggered when CC delivers the configuration snapshot. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigSnapshotDeliveryProperties.html).

By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

Defines which resources can trigger an evaluation for the rule.

The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#scope ConfigConfigRule#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putCompliance">put_compliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putEvaluationModes">put_evaluation_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetCompliance">reset_compliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetConfigRuleName">reset_config_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetEvaluationModes">reset_evaluation_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetInputParameters">reset_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency">reset_maximum_execution_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetScope">reset_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compliance` <a name="put_compliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putCompliance"></a>

```python
def put_compliance() -> None
```

##### `put_evaluation_modes` <a name="put_evaluation_modes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putEvaluationModes"></a>

```python
def put_evaluation_modes(
  value: IResolvable | typing.List[ConfigConfigRuleEvaluationModes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putEvaluationModes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>]

---

##### `put_scope` <a name="put_scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope"></a>

```python
def put_scope(
  compliance_resource_id: str = None,
  compliance_resource_types: typing.List[str] = None,
  tag_key: str = None,
  tag_value: str = None
) -> None
```

###### `compliance_resource_id`<sup>Optional</sup> <a name="compliance_resource_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope.parameter.complianceResourceId"></a>

- *Type:* str

The ID of the only AWS resource that you want to trigger an evaluation for the rule.

If you specify a resource ID, you must specify one resource type for `ComplianceResourceTypes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}

---

###### `compliance_resource_types`<sup>Optional</sup> <a name="compliance_resource_types" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope.parameter.complianceResourceTypes"></a>

- *Type:* typing.List[str]

The resource types of only those AWS resources that you want to trigger an evaluation for the rule.

You can only specify one type if you also specify a resource ID for `ComplianceResourceId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope.parameter.tagKey"></a>

- *Type:* str

The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#tag_key ConfigConfigRule#tag_key}

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope.parameter.tagValue"></a>

- *Type:* str

The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule.

If you specify a value for `TagValue`, you must also specify a value for `TagKey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#tag_value ConfigConfigRule#tag_value}

---

##### `put_source` <a name="put_source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource"></a>

```python
def put_source(
  owner: str,
  custom_policy_details: ConfigConfigRuleSourceCustomPolicyDetails = None,
  source_details: IResolvable | typing.List[ConfigConfigRuleSourceSourceDetails] = None,
  source_identifier: str = None
) -> None
```

###### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource.parameter.owner"></a>

- *Type:* str

Indicates whether AWS or the customer owns and manages the CC rule.

CC Managed Rules are predefined rules owned by AWS. For more information, see [Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) in the *developer guide*.
CC Custom Rules are rules that you can develop either with Guard (`CUSTOM_POLICY`) or LAMlong (`CUSTOM_LAMBDA`). For more information, see [Custom Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html) in the *developer guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#owner ConfigConfigRule#owner}

---

###### `custom_policy_details`<sup>Optional</sup> <a name="custom_policy_details" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource.parameter.customPolicyDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to ``CUSTOM_POLICY``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}

---

###### `source_details`<sup>Optional</sup> <a name="source_details" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource.parameter.sourceDetails"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>]

Provides the source and the message types that cause CC to evaluate your AWS resources against a rule.

It also provides the frequency with which you want CC to run evaluations for the rule if the trigger type is periodic.
If the owner is set to `CUSTOM_POLICY`, the only acceptable values for the CC rule trigger message type are `ConfigurationItemChangeNotification` and `OversizedConfigurationItemChangeNotification`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#source_details ConfigConfigRule#source_details}

---

###### `source_identifier`<sup>Optional</sup> <a name="source_identifier" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource.parameter.sourceIdentifier"></a>

- *Type:* str

For CC Managed rules, a predefined identifier from a list.

For example, `IAM_PASSWORD_POLICY` is a managed rule. To reference a managed rule, see [List of Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html).
For CC Custom Lambda rules, the identifier is the Amazon Resource Name (ARN) of the rule's LAMlong function, such as `arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name`.
For CC Custom Policy rules, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#source_identifier ConfigConfigRule#source_identifier}

---

##### `reset_compliance` <a name="reset_compliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetCompliance"></a>

```python
def reset_compliance() -> None
```

##### `reset_config_rule_name` <a name="reset_config_rule_name" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetConfigRuleName"></a>

```python
def reset_config_rule_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_evaluation_modes` <a name="reset_evaluation_modes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetEvaluationModes"></a>

```python
def reset_evaluation_modes() -> None
```

##### `reset_input_parameters` <a name="reset_input_parameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetInputParameters"></a>

```python
def reset_input_parameters() -> None
```

##### `reset_maximum_execution_frequency` <a name="reset_maximum_execution_frequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency"></a>

```python
def reset_maximum_execution_frequency() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetScope"></a>

```python
def reset_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isConstruct"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigConfigRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigConfigRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.compliance">compliance</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference">ConfigConfigRuleComplianceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleId">config_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModes">evaluation_modes</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList">ConfigConfigRuleEvaluationModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.complianceInput">compliance_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleNameInput">config_rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModesInput">evaluation_modes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParametersInput">input_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput">maximum_execution_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scopeInput">scope_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleName">config_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParameters">input_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compliance`<sup>Required</sup> <a name="compliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.compliance"></a>

```python
compliance: ConfigConfigRuleComplianceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference">ConfigConfigRuleComplianceOutputReference</a>

---

##### `config_rule_id`<sup>Required</sup> <a name="config_rule_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleId"></a>

```python
config_rule_id: str
```

- *Type:* str

---

##### `evaluation_modes`<sup>Required</sup> <a name="evaluation_modes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModes"></a>

```python
evaluation_modes: ConfigConfigRuleEvaluationModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList">ConfigConfigRuleEvaluationModesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scope"></a>

```python
scope: ConfigConfigRuleScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.source"></a>

```python
source: ConfigConfigRuleSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a>

---

##### `compliance_input`<sup>Optional</sup> <a name="compliance_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.complianceInput"></a>

```python
compliance_input: IResolvable | ConfigConfigRuleCompliance
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

---

##### `config_rule_name_input`<sup>Optional</sup> <a name="config_rule_name_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleNameInput"></a>

```python
config_rule_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `evaluation_modes_input`<sup>Optional</sup> <a name="evaluation_modes_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModesInput"></a>

```python
evaluation_modes_input: IResolvable | typing.List[ConfigConfigRuleEvaluationModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>]

---

##### `input_parameters_input`<sup>Optional</sup> <a name="input_parameters_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParametersInput"></a>

```python
input_parameters_input: str
```

- *Type:* str

---

##### `maximum_execution_frequency_input`<sup>Optional</sup> <a name="maximum_execution_frequency_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput"></a>

```python
maximum_execution_frequency_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scopeInput"></a>

```python
scope_input: IResolvable | ConfigConfigRuleScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.sourceInput"></a>

```python
source_input: IResolvable | ConfigConfigRuleSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `config_rule_name`<sup>Required</sup> <a name="config_rule_name" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleName"></a>

```python
config_rule_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

---

##### `maximum_execution_frequency`<sup>Required</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigRuleCompliance <a name="ConfigConfigRuleCompliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleCompliance()
```


### ConfigConfigRuleConfig <a name="ConfigConfigRuleConfig" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  source: ConfigConfigRuleSource,
  compliance: ConfigConfigRuleCompliance = None,
  config_rule_name: str = None,
  description: str = None,
  evaluation_modes: IResolvable | typing.List[ConfigConfigRuleEvaluationModes] = None,
  input_parameters: str = None,
  maximum_execution_frequency: str = None,
  scope: ConfigConfigRuleScope = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.compliance">compliance</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.configRuleName">config_rule_name</a></code> | <code>str</code> | A name for the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.description">description</a></code> | <code>str</code> | The description that you provide for the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.evaluationModes">evaluation_modes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>]</code> | The modes the CC rule can be evaluated in. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.inputParameters">input_parameters</a></code> | <code>str</code> | A string, in JSON format, that is passed to the CC rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | The maximum frequency with which CC runs evaluations for a rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | Defines which resources can trigger an evaluation for the rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.source"></a>

```python
source: ConfigConfigRuleSource
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#source ConfigConfigRule#source}

---

##### `compliance`<sup>Optional</sup> <a name="compliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.compliance"></a>

```python
compliance: ConfigConfigRuleCompliance
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#compliance ConfigConfigRule#compliance}

---

##### `config_rule_name`<sup>Optional</sup> <a name="config_rule_name" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.configRuleName"></a>

```python
config_rule_name: str
```

- *Type:* str

A name for the CC rule.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the rule name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#config_rule_name ConfigConfigRule#config_rule_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description that you provide for the CC rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#description ConfigConfigRule#description}

---

##### `evaluation_modes`<sup>Optional</sup> <a name="evaluation_modes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.evaluationModes"></a>

```python
evaluation_modes: IResolvable | typing.List[ConfigConfigRuleEvaluationModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>]

The modes the CC rule can be evaluated in.

The valid values are distinct objects. By default, the value is Detective evaluation mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#evaluation_modes ConfigConfigRule#evaluation_modes}

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

A string, in JSON format, that is passed to the CC rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#input_parameters ConfigConfigRule#input_parameters}

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

The maximum frequency with which CC runs evaluations for a rule.

You can specify a value for `MaximumExecutionFrequency` when:

* You are using an AWS managed rule that is triggered at a periodic frequency.
* Your custom rule is triggered when CC delivers the configuration snapshot. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigSnapshotDeliveryProperties.html).

By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.scope"></a>

```python
scope: ConfigConfigRuleScope
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

Defines which resources can trigger an evaluation for the rule.

The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#scope ConfigConfigRule#scope}

---

### ConfigConfigRuleEvaluationModes <a name="ConfigConfigRuleEvaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleEvaluationModes(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes.property.mode">mode</a></code> | <code>str</code> | The mode of an evaluation. The valid values are Detective or Proactive. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode of an evaluation. The valid values are Detective or Proactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#mode ConfigConfigRule#mode}

---

### ConfigConfigRuleScope <a name="ConfigConfigRuleScope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleScope(
  compliance_resource_id: str = None,
  compliance_resource_types: typing.List[str] = None,
  tag_key: str = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId">compliance_resource_id</a></code> | <code>str</code> | The ID of the only AWS resource that you want to trigger an evaluation for the rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes">compliance_resource_types</a></code> | <code>typing.List[str]</code> | The resource types of only those AWS resources that you want to trigger an evaluation for the rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagKey">tag_key</a></code> | <code>str</code> | The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagValue">tag_value</a></code> | <code>str</code> | The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. |

---

##### `compliance_resource_id`<sup>Optional</sup> <a name="compliance_resource_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId"></a>

```python
compliance_resource_id: str
```

- *Type:* str

The ID of the only AWS resource that you want to trigger an evaluation for the rule.

If you specify a resource ID, you must specify one resource type for `ComplianceResourceTypes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}

---

##### `compliance_resource_types`<sup>Optional</sup> <a name="compliance_resource_types" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes"></a>

```python
compliance_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

The resource types of only those AWS resources that you want to trigger an evaluation for the rule.

You can only specify one type if you also specify a resource ID for `ComplianceResourceId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#tag_key ConfigConfigRule#tag_key}

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule.

If you specify a value for `TagValue`, you must also specify a value for `TagKey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#tag_value ConfigConfigRule#tag_value}

---

### ConfigConfigRuleSource <a name="ConfigConfigRuleSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleSource(
  owner: str,
  custom_policy_details: ConfigConfigRuleSourceCustomPolicyDetails = None,
  source_details: IResolvable | typing.List[ConfigConfigRuleSourceSourceDetails] = None,
  source_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.owner">owner</a></code> | <code>str</code> | Indicates whether AWS or the customer owns and manages the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails">custom_policy_details</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to ``CUSTOM_POLICY``. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceDetails">source_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>]</code> | Provides the source and the message types that cause CC to evaluate your AWS resources against a rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier">source_identifier</a></code> | <code>str</code> | For CC Managed rules, a predefined identifier from a list. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.owner"></a>

```python
owner: str
```

- *Type:* str

Indicates whether AWS or the customer owns and manages the CC rule.

CC Managed Rules are predefined rules owned by AWS. For more information, see [Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) in the *developer guide*.
CC Custom Rules are rules that you can develop either with Guard (`CUSTOM_POLICY`) or LAMlong (`CUSTOM_LAMBDA`). For more information, see [Custom Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html) in the *developer guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#owner ConfigConfigRule#owner}

---

##### `custom_policy_details`<sup>Optional</sup> <a name="custom_policy_details" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails"></a>

```python
custom_policy_details: ConfigConfigRuleSourceCustomPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to ``CUSTOM_POLICY``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}

---

##### `source_details`<sup>Optional</sup> <a name="source_details" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceDetails"></a>

```python
source_details: IResolvable | typing.List[ConfigConfigRuleSourceSourceDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>]

Provides the source and the message types that cause CC to evaluate your AWS resources against a rule.

It also provides the frequency with which you want CC to run evaluations for the rule if the trigger type is periodic.
If the owner is set to `CUSTOM_POLICY`, the only acceptable values for the CC rule trigger message type are `ConfigurationItemChangeNotification` and `OversizedConfigurationItemChangeNotification`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#source_details ConfigConfigRule#source_details}

---

##### `source_identifier`<sup>Optional</sup> <a name="source_identifier" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier"></a>

```python
source_identifier: str
```

- *Type:* str

For CC Managed rules, a predefined identifier from a list.

For example, `IAM_PASSWORD_POLICY` is a managed rule. To reference a managed rule, see [List of Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html).
For CC Custom Lambda rules, the identifier is the Amazon Resource Name (ARN) of the rule's LAMlong function, such as `arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name`.
For CC Custom Policy rules, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#source_identifier ConfigConfigRule#source_identifier}

---

### ConfigConfigRuleSourceCustomPolicyDetails <a name="ConfigConfigRuleSourceCustomPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails(
  enable_debug_log_delivery: bool | IResolvable = None,
  policy_runtime: str = None,
  policy_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery">enable_debug_log_delivery</a></code> | <code>bool \| cdktn.IResolvable</code> | The boolean expression for enabling debug logging for your CC Custom Policy rule. The default value is ``false``. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime">policy_runtime</a></code> | <code>str</code> | The runtime system for your CC Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText">policy_text</a></code> | <code>str</code> | The policy definition containing the logic for your CC Custom Policy rule. |

---

##### `enable_debug_log_delivery`<sup>Optional</sup> <a name="enable_debug_log_delivery" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery"></a>

```python
enable_debug_log_delivery: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The boolean expression for enabling debug logging for your CC Custom Policy rule. The default value is ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}

---

##### `policy_runtime`<sup>Optional</sup> <a name="policy_runtime" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime"></a>

```python
policy_runtime: str
```

- *Type:* str

The runtime system for your CC Custom Policy rule.

Guard is a policy-as-code language that allows you to write policies that are enforced by CC Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}

---

##### `policy_text`<sup>Optional</sup> <a name="policy_text" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText"></a>

```python
policy_text: str
```

- *Type:* str

The policy definition containing the logic for your CC Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#policy_text ConfigConfigRule#policy_text}

---

### ConfigConfigRuleSourceSourceDetails <a name="ConfigConfigRuleSourceSourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleSourceSourceDetails(
  event_source: str = None,
  maximum_execution_frequency: str = None,
  message_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.eventSource">event_source</a></code> | <code>str</code> | The source of the event, such as an AWS service, that triggers CC to evaluate your AWS resources. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | The frequency at which you want CC to run evaluations for a custom rule with a periodic trigger. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.messageType">message_type</a></code> | <code>str</code> | The type of notification that triggers CC to run an evaluation for a rule. |

---

##### `event_source`<sup>Optional</sup> <a name="event_source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.eventSource"></a>

```python
event_source: str
```

- *Type:* str

The source of the event, such as an AWS service, that triggers CC to evaluate your AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#event_source ConfigConfigRule#event_source}

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

The frequency at which you want CC to run evaluations for a custom rule with a periodic trigger.

If you specify a value for `MaximumExecutionFrequency`, then `MessageType` must use the `ScheduledNotification` value.
By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
Based on the valid value you choose, CC runs evaluations once for each valid value. For example, if you choose `Three_Hours`, CC runs evaluations once every three hours. In this case, `Three_Hours` is the frequency of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}

---

##### `message_type`<sup>Optional</sup> <a name="message_type" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

The type of notification that triggers CC to run an evaluation for a rule.

You can specify the following notification types:

* `ConfigurationItemChangeNotification` - Triggers an evaluation when CC delivers a configuration item as a result of a resource change.
* `OversizedConfigurationItemChangeNotification` - Triggers an evaluation when CC delivers an oversized configuration item. CC may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
* `ScheduledNotification` - Triggers a periodic evaluation at the frequency specified for `MaximumExecutionFrequency`.
* `ConfigurationSnapshotDeliveryCompleted` - Triggers a periodic evaluation when CC delivers a configuration snapshot.

If you want your custom rule to be triggered by configuration changes, specify two SourceDetail objects, one for `ConfigurationItemChangeNotification` and one for `OversizedConfigurationItemChangeNotification`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#message_type ConfigConfigRule#message_type}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigRuleComplianceOutputReference <a name="ConfigConfigRuleComplianceOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleComplianceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigRuleCompliance
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

---


### ConfigConfigRuleEvaluationModesList <a name="ConfigConfigRuleEvaluationModesList" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleEvaluationModesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigConfigRuleEvaluationModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigConfigRuleEvaluationModes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>]

---


### ConfigConfigRuleEvaluationModesOutputReference <a name="ConfigConfigRuleEvaluationModesOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleEvaluationModesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigRuleEvaluationModes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>

---


### ConfigConfigRuleScopeOutputReference <a name="ConfigConfigRuleScopeOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId">reset_compliance_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes">reset_compliance_resource_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compliance_resource_id` <a name="reset_compliance_resource_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId"></a>

```python
def reset_compliance_resource_id() -> None
```

##### `reset_compliance_resource_types` <a name="reset_compliance_resource_types" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes"></a>

```python
def reset_compliance_resource_types() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput">compliance_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput">compliance_resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId">compliance_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes">compliance_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compliance_resource_id_input`<sup>Optional</sup> <a name="compliance_resource_id_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput"></a>

```python
compliance_resource_id_input: str
```

- *Type:* str

---

##### `compliance_resource_types_input`<sup>Optional</sup> <a name="compliance_resource_types_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput"></a>

```python
compliance_resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `compliance_resource_id`<sup>Required</sup> <a name="compliance_resource_id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId"></a>

```python
compliance_resource_id: str
```

- *Type:* str

---

##### `compliance_resource_types`<sup>Required</sup> <a name="compliance_resource_types" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes"></a>

```python
compliance_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigRuleScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---


### ConfigConfigRuleSourceCustomPolicyDetailsOutputReference <a name="ConfigConfigRuleSourceCustomPolicyDetailsOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery">reset_enable_debug_log_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyRuntime">reset_policy_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyText">reset_policy_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_debug_log_delivery` <a name="reset_enable_debug_log_delivery" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery"></a>

```python
def reset_enable_debug_log_delivery() -> None
```

##### `reset_policy_runtime` <a name="reset_policy_runtime" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyRuntime"></a>

```python
def reset_policy_runtime() -> None
```

##### `reset_policy_text` <a name="reset_policy_text" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyText"></a>

```python
def reset_policy_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput">enable_debug_log_delivery_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput">policy_runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput">policy_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery">enable_debug_log_delivery</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime">policy_runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText">policy_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_debug_log_delivery_input`<sup>Optional</sup> <a name="enable_debug_log_delivery_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput"></a>

```python
enable_debug_log_delivery_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `policy_runtime_input`<sup>Optional</sup> <a name="policy_runtime_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput"></a>

```python
policy_runtime_input: str
```

- *Type:* str

---

##### `policy_text_input`<sup>Optional</sup> <a name="policy_text_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput"></a>

```python
policy_text_input: str
```

- *Type:* str

---

##### `enable_debug_log_delivery`<sup>Required</sup> <a name="enable_debug_log_delivery" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery"></a>

```python
enable_debug_log_delivery: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `policy_runtime`<sup>Required</sup> <a name="policy_runtime" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime"></a>

```python
policy_runtime: str
```

- *Type:* str

---

##### `policy_text`<sup>Required</sup> <a name="policy_text" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText"></a>

```python
policy_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigRuleSourceCustomPolicyDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---


### ConfigConfigRuleSourceOutputReference <a name="ConfigConfigRuleSourceOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails">put_custom_policy_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetails">put_source_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails">reset_custom_policy_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetails">reset_source_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier">reset_source_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_policy_details` <a name="put_custom_policy_details" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails"></a>

```python
def put_custom_policy_details(
  enable_debug_log_delivery: bool | IResolvable = None,
  policy_runtime: str = None,
  policy_text: str = None
) -> None
```

###### `enable_debug_log_delivery`<sup>Optional</sup> <a name="enable_debug_log_delivery" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.enableDebugLogDelivery"></a>

- *Type:* bool | cdktn.IResolvable

The boolean expression for enabling debug logging for your CC Custom Policy rule. The default value is ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}

---

###### `policy_runtime`<sup>Optional</sup> <a name="policy_runtime" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.policyRuntime"></a>

- *Type:* str

The runtime system for your CC Custom Policy rule.

Guard is a policy-as-code language that allows you to write policies that are enforced by CC Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}

---

###### `policy_text`<sup>Optional</sup> <a name="policy_text" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.policyText"></a>

- *Type:* str

The policy definition containing the logic for your CC Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#policy_text ConfigConfigRule#policy_text}

---

##### `put_source_details` <a name="put_source_details" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetails"></a>

```python
def put_source_details(
  value: IResolvable | typing.List[ConfigConfigRuleSourceSourceDetails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>]

---

##### `reset_custom_policy_details` <a name="reset_custom_policy_details" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails"></a>

```python
def reset_custom_policy_details() -> None
```

##### `reset_source_details` <a name="reset_source_details" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetails"></a>

```python
def reset_source_details() -> None
```

##### `reset_source_identifier` <a name="reset_source_identifier" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier"></a>

```python
def reset_source_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails">custom_policy_details</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetails">source_details</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList">ConfigConfigRuleSourceSourceDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput">custom_policy_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailsInput">source_details_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput">source_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier">source_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_policy_details`<sup>Required</sup> <a name="custom_policy_details" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails"></a>

```python
custom_policy_details: ConfigConfigRuleSourceCustomPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a>

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetails"></a>

```python
source_details: ConfigConfigRuleSourceSourceDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList">ConfigConfigRuleSourceSourceDetailsList</a>

---

##### `custom_policy_details_input`<sup>Optional</sup> <a name="custom_policy_details_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput"></a>

```python
custom_policy_details_input: IResolvable | ConfigConfigRuleSourceCustomPolicyDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `source_details_input`<sup>Optional</sup> <a name="source_details_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailsInput"></a>

```python
source_details_input: IResolvable | typing.List[ConfigConfigRuleSourceSourceDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>]

---

##### `source_identifier_input`<sup>Optional</sup> <a name="source_identifier_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput"></a>

```python
source_identifier_input: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `source_identifier`<sup>Required</sup> <a name="source_identifier" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier"></a>

```python
source_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigRuleSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---


### ConfigConfigRuleSourceSourceDetailsList <a name="ConfigConfigRuleSourceSourceDetailsList" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleSourceSourceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigConfigRuleSourceSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigConfigRuleSourceSourceDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>]

---


### ConfigConfigRuleSourceSourceDetailsOutputReference <a name="ConfigConfigRuleSourceSourceDetailsOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_config_rule

configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetEventSource">reset_event_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMaximumExecutionFrequency">reset_maximum_execution_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMessageType">reset_message_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_source` <a name="reset_event_source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetEventSource"></a>

```python
def reset_event_source() -> None
```

##### `reset_maximum_execution_frequency` <a name="reset_maximum_execution_frequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMaximumExecutionFrequency"></a>

```python
def reset_maximum_execution_frequency() -> None
```

##### `reset_message_type` <a name="reset_message_type" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMessageType"></a>

```python
def reset_message_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSourceInput">event_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequencyInput">maximum_execution_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageTypeInput">message_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSource">event_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_source_input`<sup>Optional</sup> <a name="event_source_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSourceInput"></a>

```python
event_source_input: str
```

- *Type:* str

---

##### `maximum_execution_frequency_input`<sup>Optional</sup> <a name="maximum_execution_frequency_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequencyInput"></a>

```python
maximum_execution_frequency_input: str
```

- *Type:* str

---

##### `message_type_input`<sup>Optional</sup> <a name="message_type_input" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageTypeInput"></a>

```python
message_type_input: str
```

- *Type:* str

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSource"></a>

```python
event_source: str
```

- *Type:* str

---

##### `maximum_execution_frequency`<sup>Required</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigRuleSourceSourceDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>

---



