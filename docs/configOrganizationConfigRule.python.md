# `configOrganizationConfigRule` Submodule <a name="`configOrganizationConfigRule` Submodule" id="@cdktn/provider-awscc.configOrganizationConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationConfigRule <a name="ConfigOrganizationConfigRule" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule awscc_config_organization_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  organization_config_rule_name: str,
  excluded_accounts: typing.List[str] = None,
  organization_custom_policy_rule_metadata: ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata = None,
  organization_custom_rule_metadata: ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata = None,
  organization_managed_rule_metadata: ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationConfigRuleName">organization_config_rule_name</a></code> | <code>str</code> | The name that you assign to an organization AWS Config rule. Required. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | A comma-separated list of accounts that you want to exclude from an organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationCustomPolicyRuleMetadata">organization_custom_policy_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | This object specifies metadata for your organization's AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationCustomRuleMetadata">organization_custom_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationManagedRuleMetadata">organization_managed_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization_config_rule_name`<sup>Required</sup> <a name="organization_config_rule_name" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationConfigRuleName"></a>

- *Type:* str

The name that you assign to an organization AWS Config rule. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_name ConfigOrganizationConfigRule#organization_config_rule_name}

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.excludedAccounts"></a>

- *Type:* typing.List[str]

A comma-separated list of accounts that you want to exclude from an organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#excluded_accounts ConfigOrganizationConfigRule#excluded_accounts}

---

##### `organization_custom_policy_rule_metadata`<sup>Optional</sup> <a name="organization_custom_policy_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationCustomPolicyRuleMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

This object specifies metadata for your organization's AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_policy_rule_metadata ConfigOrganizationConfigRule#organization_custom_policy_rule_metadata}

---

##### `organization_custom_rule_metadata`<sup>Optional</sup> <a name="organization_custom_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationCustomRuleMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_rule_metadata ConfigOrganizationConfigRule#organization_custom_rule_metadata}

---

##### `organization_managed_rule_metadata`<sup>Optional</sup> <a name="organization_managed_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationManagedRuleMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_managed_rule_metadata ConfigOrganizationConfigRule#organization_managed_rule_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata">put_organization_custom_policy_rule_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata">put_organization_custom_rule_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata">put_organization_managed_rule_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetExcludedAccounts">reset_excluded_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomPolicyRuleMetadata">reset_organization_custom_policy_rule_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomRuleMetadata">reset_organization_custom_rule_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationManagedRuleMetadata">reset_organization_managed_rule_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_organization_custom_policy_rule_metadata` <a name="put_organization_custom_policy_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata"></a>

```python
def put_organization_custom_policy_rule_metadata(
  debug_log_delivery_accounts: typing.List[str] = None,
  description: str = None,
  input_parameters: str = None,
  organization_config_rule_trigger_types: typing.List[str] = None,
  policy_text: str = None,
  resource_id_scope: str = None,
  resource_types_scope: typing.List[str] = None,
  runtime: str = None,
  tag_key_scope: str = None,
  tag_value_scope: str = None
) -> None
```

###### `debug_log_delivery_accounts`<sup>Optional</sup> <a name="debug_log_delivery_accounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.debugLogDeliveryAccounts"></a>

- *Type:* typing.List[str]

A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#debug_log_delivery_accounts ConfigOrganizationConfigRule#debug_log_delivery_accounts}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.description"></a>

- *Type:* str

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

###### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.inputParameters"></a>

- *Type:* str

A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

###### `organization_config_rule_trigger_types`<sup>Optional</sup> <a name="organization_config_rule_trigger_types" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.organizationConfigRuleTriggerTypes"></a>

- *Type:* typing.List[str]

The type of notification that initiates AWS Config to run an evaluation for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types ConfigOrganizationConfigRule#organization_config_rule_trigger_types}

---

###### `policy_text`<sup>Optional</sup> <a name="policy_text" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.policyText"></a>

- *Type:* str

The policy definition containing the logic for your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#policy_text ConfigOrganizationConfigRule#policy_text}

---

###### `resource_id_scope`<sup>Optional</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.resourceIdScope"></a>

- *Type:* str

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

###### `resource_types_scope`<sup>Optional</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.resourceTypesScope"></a>

- *Type:* typing.List[str]

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

###### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.runtime"></a>

- *Type:* str

The runtime system for your organization AWS Config Custom Policy rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#runtime ConfigOrganizationConfigRule#runtime}

---

###### `tag_key_scope`<sup>Optional</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.tagKeyScope"></a>

- *Type:* str

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

###### `tag_value_scope`<sup>Optional</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.tagValueScope"></a>

- *Type:* str

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

##### `put_organization_custom_rule_metadata` <a name="put_organization_custom_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata"></a>

```python
def put_organization_custom_rule_metadata(
  description: str = None,
  input_parameters: str = None,
  lambda_function_arn: str = None,
  maximum_execution_frequency: str = None,
  organization_config_rule_trigger_types: typing.List[str] = None,
  resource_id_scope: str = None,
  resource_types_scope: typing.List[str] = None,
  tag_key_scope: str = None,
  tag_value_scope: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.description"></a>

- *Type:* str

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

###### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.inputParameters"></a>

- *Type:* str

A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

###### `lambda_function_arn`<sup>Optional</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.lambdaFunctionArn"></a>

- *Type:* str

The lambda function ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#lambda_function_arn ConfigOrganizationConfigRule#lambda_function_arn}

---

###### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.maximumExecutionFrequency"></a>

- *Type:* str

The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#maximum_execution_frequency ConfigOrganizationConfigRule#maximum_execution_frequency}

---

###### `organization_config_rule_trigger_types`<sup>Optional</sup> <a name="organization_config_rule_trigger_types" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.organizationConfigRuleTriggerTypes"></a>

- *Type:* typing.List[str]

The type of notification that triggers AWS Config to run an evaluation for a rule.

You can specify the following notification types:

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types ConfigOrganizationConfigRule#organization_config_rule_trigger_types}

---

###### `resource_id_scope`<sup>Optional</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.resourceIdScope"></a>

- *Type:* str

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

###### `resource_types_scope`<sup>Optional</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.resourceTypesScope"></a>

- *Type:* typing.List[str]

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

###### `tag_key_scope`<sup>Optional</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.tagKeyScope"></a>

- *Type:* str

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

###### `tag_value_scope`<sup>Optional</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.tagValueScope"></a>

- *Type:* str

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

##### `put_organization_managed_rule_metadata` <a name="put_organization_managed_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata"></a>

```python
def put_organization_managed_rule_metadata(
  description: str = None,
  input_parameters: str = None,
  maximum_execution_frequency: str = None,
  resource_id_scope: str = None,
  resource_types_scope: typing.List[str] = None,
  rule_identifier: str = None,
  tag_key_scope: str = None,
  tag_value_scope: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.description"></a>

- *Type:* str

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

###### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.inputParameters"></a>

- *Type:* str

A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

###### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.maximumExecutionFrequency"></a>

- *Type:* str

The maximum frequency with which AWS Config runs evaluations for a rule.

Valid Values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#maximum_execution_frequency ConfigOrganizationConfigRule#maximum_execution_frequency}

---

###### `resource_id_scope`<sup>Optional</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.resourceIdScope"></a>

- *Type:* str

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

###### `resource_types_scope`<sup>Optional</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.resourceTypesScope"></a>

- *Type:* typing.List[str]

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

###### `rule_identifier`<sup>Optional</sup> <a name="rule_identifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.ruleIdentifier"></a>

- *Type:* str

Required.

For organization config managed rules, a predefined identifier from a list. For example, IAM_PASSWORD_POLICY is a managed rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#rule_identifier ConfigOrganizationConfigRule#rule_identifier}

---

###### `tag_key_scope`<sup>Optional</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.tagKeyScope"></a>

- *Type:* str

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

###### `tag_value_scope`<sup>Optional</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.tagValueScope"></a>

- *Type:* str

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

##### `reset_excluded_accounts` <a name="reset_excluded_accounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetExcludedAccounts"></a>

```python
def reset_excluded_accounts() -> None
```

##### `reset_organization_custom_policy_rule_metadata` <a name="reset_organization_custom_policy_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomPolicyRuleMetadata"></a>

```python
def reset_organization_custom_policy_rule_metadata() -> None
```

##### `reset_organization_custom_rule_metadata` <a name="reset_organization_custom_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomRuleMetadata"></a>

```python
def reset_organization_custom_rule_metadata() -> None
```

##### `reset_organization_managed_rule_metadata` <a name="reset_organization_managed_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationManagedRuleMetadata"></a>

```python
def reset_organization_managed_rule_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigOrganizationConfigRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigOrganizationConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleArn">organization_config_rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata">organization_custom_policy_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadata">organization_custom_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadata">organization_managed_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccountsInput">excluded_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleNameInput">organization_config_rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadataInput">organization_custom_policy_rule_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadataInput">organization_custom_rule_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadataInput">organization_managed_rule_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleName">organization_config_rule_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization_config_rule_arn`<sup>Required</sup> <a name="organization_config_rule_arn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleArn"></a>

```python
organization_config_rule_arn: str
```

- *Type:* str

---

##### `organization_custom_policy_rule_metadata`<sup>Required</sup> <a name="organization_custom_policy_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata"></a>

```python
organization_custom_policy_rule_metadata: ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a>

---

##### `organization_custom_rule_metadata`<sup>Required</sup> <a name="organization_custom_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadata"></a>

```python
organization_custom_rule_metadata: ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a>

---

##### `organization_managed_rule_metadata`<sup>Required</sup> <a name="organization_managed_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadata"></a>

```python
organization_managed_rule_metadata: ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a>

---

##### `excluded_accounts_input`<sup>Optional</sup> <a name="excluded_accounts_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccountsInput"></a>

```python
excluded_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_config_rule_name_input`<sup>Optional</sup> <a name="organization_config_rule_name_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleNameInput"></a>

```python
organization_config_rule_name_input: str
```

- *Type:* str

---

##### `organization_custom_policy_rule_metadata_input`<sup>Optional</sup> <a name="organization_custom_policy_rule_metadata_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadataInput"></a>

```python
organization_custom_policy_rule_metadata_input: IResolvable | ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---

##### `organization_custom_rule_metadata_input`<sup>Optional</sup> <a name="organization_custom_rule_metadata_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadataInput"></a>

```python
organization_custom_rule_metadata_input: IResolvable | ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---

##### `organization_managed_rule_metadata_input`<sup>Optional</sup> <a name="organization_managed_rule_metadata_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadataInput"></a>

```python
organization_managed_rule_metadata_input: IResolvable | ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---

##### `excluded_accounts`<sup>Required</sup> <a name="excluded_accounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_config_rule_name`<sup>Required</sup> <a name="organization_config_rule_name" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleName"></a>

```python
organization_config_rule_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationConfigRuleConfig <a name="ConfigOrganizationConfigRuleConfig" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  organization_config_rule_name: str,
  excluded_accounts: typing.List[str] = None,
  organization_custom_policy_rule_metadata: ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata = None,
  organization_custom_rule_metadata: ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata = None,
  organization_managed_rule_metadata: ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationConfigRuleName">organization_config_rule_name</a></code> | <code>str</code> | The name that you assign to an organization AWS Config rule. Required. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | A comma-separated list of accounts that you want to exclude from an organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomPolicyRuleMetadata">organization_custom_policy_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | This object specifies metadata for your organization's AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomRuleMetadata">organization_custom_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationManagedRuleMetadata">organization_managed_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization_config_rule_name`<sup>Required</sup> <a name="organization_config_rule_name" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationConfigRuleName"></a>

```python
organization_config_rule_name: str
```

- *Type:* str

The name that you assign to an organization AWS Config rule. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_name ConfigOrganizationConfigRule#organization_config_rule_name}

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

A comma-separated list of accounts that you want to exclude from an organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#excluded_accounts ConfigOrganizationConfigRule#excluded_accounts}

---

##### `organization_custom_policy_rule_metadata`<sup>Optional</sup> <a name="organization_custom_policy_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomPolicyRuleMetadata"></a>

```python
organization_custom_policy_rule_metadata: ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

This object specifies metadata for your organization's AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_policy_rule_metadata ConfigOrganizationConfigRule#organization_custom_policy_rule_metadata}

---

##### `organization_custom_rule_metadata`<sup>Optional</sup> <a name="organization_custom_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomRuleMetadata"></a>

```python
organization_custom_rule_metadata: ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_rule_metadata ConfigOrganizationConfigRule#organization_custom_rule_metadata}

---

##### `organization_managed_rule_metadata`<sup>Optional</sup> <a name="organization_managed_rule_metadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationManagedRuleMetadata"></a>

```python
organization_managed_rule_metadata: ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_managed_rule_metadata ConfigOrganizationConfigRule#organization_managed_rule_metadata}

---

### ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata(
  debug_log_delivery_accounts: typing.List[str] = None,
  description: str = None,
  input_parameters: str = None,
  organization_config_rule_trigger_types: typing.List[str] = None,
  policy_text: str = None,
  resource_id_scope: str = None,
  resource_types_scope: typing.List[str] = None,
  runtime: str = None,
  tag_key_scope: str = None,
  tag_value_scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.debugLogDeliveryAccounts">debug_log_delivery_accounts</a></code> | <code>typing.List[str]</code> | A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.description">description</a></code> | <code>str</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.inputParameters">input_parameters</a></code> | <code>str</code> | A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.organizationConfigRuleTriggerTypes">organization_config_rule_trigger_types</a></code> | <code>typing.List[str]</code> | The type of notification that initiates AWS Config to run an evaluation for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.policyText">policy_text</a></code> | <code>str</code> | The policy definition containing the logic for your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.runtime">runtime</a></code> | <code>str</code> | The runtime system for your organization AWS Config Custom Policy rules. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | The optional part of a key-value pair that make up a tag. |

---

##### `debug_log_delivery_accounts`<sup>Optional</sup> <a name="debug_log_delivery_accounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.debugLogDeliveryAccounts"></a>

```python
debug_log_delivery_accounts: typing.List[str]
```

- *Type:* typing.List[str]

A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#debug_log_delivery_accounts ConfigOrganizationConfigRule#debug_log_delivery_accounts}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.description"></a>

```python
description: str
```

- *Type:* str

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `organization_config_rule_trigger_types`<sup>Optional</sup> <a name="organization_config_rule_trigger_types" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.organizationConfigRuleTriggerTypes"></a>

```python
organization_config_rule_trigger_types: typing.List[str]
```

- *Type:* typing.List[str]

The type of notification that initiates AWS Config to run an evaluation for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types ConfigOrganizationConfigRule#organization_config_rule_trigger_types}

---

##### `policy_text`<sup>Optional</sup> <a name="policy_text" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.policyText"></a>

```python
policy_text: str
```

- *Type:* str

The policy definition containing the logic for your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#policy_text ConfigOrganizationConfigRule#policy_text}

---

##### `resource_id_scope`<sup>Optional</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `resource_types_scope`<sup>Optional</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

The runtime system for your organization AWS Config Custom Policy rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#runtime ConfigOrganizationConfigRule#runtime}

---

##### `tag_key_scope`<sup>Optional</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `tag_value_scope`<sup>Optional</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

### ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata(
  description: str = None,
  input_parameters: str = None,
  lambda_function_arn: str = None,
  maximum_execution_frequency: str = None,
  organization_config_rule_trigger_types: typing.List[str] = None,
  resource_id_scope: str = None,
  resource_types_scope: typing.List[str] = None,
  tag_key_scope: str = None,
  tag_value_scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.description">description</a></code> | <code>str</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.inputParameters">input_parameters</a></code> | <code>str</code> | A string, in JSON format, that is passed to your organization AWS Config rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | The lambda function ARN. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour \| Three_Hours \| Six_Hours \| Twelve_Hours \| TwentyFour_Hours. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.organizationConfigRuleTriggerTypes">organization_config_rule_trigger_types</a></code> | <code>typing.List[str]</code> | The type of notification that triggers AWS Config to run an evaluation for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | The optional part of a key-value pair that make up a tag. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.description"></a>

```python
description: str
```

- *Type:* str

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `lambda_function_arn`<sup>Optional</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

The lambda function ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#lambda_function_arn ConfigOrganizationConfigRule#lambda_function_arn}

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#maximum_execution_frequency ConfigOrganizationConfigRule#maximum_execution_frequency}

---

##### `organization_config_rule_trigger_types`<sup>Optional</sup> <a name="organization_config_rule_trigger_types" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.organizationConfigRuleTriggerTypes"></a>

```python
organization_config_rule_trigger_types: typing.List[str]
```

- *Type:* typing.List[str]

The type of notification that triggers AWS Config to run an evaluation for a rule.

You can specify the following notification types:

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types ConfigOrganizationConfigRule#organization_config_rule_trigger_types}

---

##### `resource_id_scope`<sup>Optional</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `resource_types_scope`<sup>Optional</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `tag_key_scope`<sup>Optional</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `tag_value_scope`<sup>Optional</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

### ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata(
  description: str = None,
  input_parameters: str = None,
  maximum_execution_frequency: str = None,
  resource_id_scope: str = None,
  resource_types_scope: typing.List[str] = None,
  rule_identifier: str = None,
  tag_key_scope: str = None,
  tag_value_scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.description">description</a></code> | <code>str</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.inputParameters">input_parameters</a></code> | <code>str</code> | A string, in JSON format, that is passed to your organization AWS Config rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | The maximum frequency with which AWS Config runs evaluations for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.ruleIdentifier">rule_identifier</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | The optional part of a key-value pair that make up a tag. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.description"></a>

```python
description: str
```

- *Type:* str

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `maximum_execution_frequency`<sup>Optional</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

The maximum frequency with which AWS Config runs evaluations for a rule.

Valid Values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#maximum_execution_frequency ConfigOrganizationConfigRule#maximum_execution_frequency}

---

##### `resource_id_scope`<sup>Optional</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `resource_types_scope`<sup>Optional</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `rule_identifier`<sup>Optional</sup> <a name="rule_identifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.ruleIdentifier"></a>

```python
rule_identifier: str
```

- *Type:* str

Required.

For organization config managed rules, a predefined identifier from a list. For example, IAM_PASSWORD_POLICY is a managed rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#rule_identifier ConfigOrganizationConfigRule#rule_identifier}

---

##### `tag_key_scope`<sup>Optional</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `tag_value_scope`<sup>Optional</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDebugLogDeliveryAccounts">reset_debug_log_delivery_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetInputParameters">reset_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes">reset_organization_config_rule_trigger_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetPolicyText">reset_policy_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceIdScope">reset_resource_id_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceTypesScope">reset_resource_types_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagKeyScope">reset_tag_key_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagValueScope">reset_tag_value_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_debug_log_delivery_accounts` <a name="reset_debug_log_delivery_accounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDebugLogDeliveryAccounts"></a>

```python
def reset_debug_log_delivery_accounts() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_input_parameters` <a name="reset_input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetInputParameters"></a>

```python
def reset_input_parameters() -> None
```

##### `reset_organization_config_rule_trigger_types` <a name="reset_organization_config_rule_trigger_types" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes"></a>

```python
def reset_organization_config_rule_trigger_types() -> None
```

##### `reset_policy_text` <a name="reset_policy_text" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetPolicyText"></a>

```python
def reset_policy_text() -> None
```

##### `reset_resource_id_scope` <a name="reset_resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceIdScope"></a>

```python
def reset_resource_id_scope() -> None
```

##### `reset_resource_types_scope` <a name="reset_resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceTypesScope"></a>

```python
def reset_resource_types_scope() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_tag_key_scope` <a name="reset_tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagKeyScope"></a>

```python
def reset_tag_key_scope() -> None
```

##### `reset_tag_value_scope` <a name="reset_tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagValueScope"></a>

```python
def reset_tag_value_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccountsInput">debug_log_delivery_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParametersInput">input_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput">organization_config_rule_trigger_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyTextInput">policy_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScopeInput">resource_id_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScopeInput">resource_types_scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScopeInput">tag_key_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScopeInput">tag_value_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts">debug_log_delivery_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters">input_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">organization_config_rule_trigger_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText">policy_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `debug_log_delivery_accounts_input`<sup>Optional</sup> <a name="debug_log_delivery_accounts_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccountsInput"></a>

```python
debug_log_delivery_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `input_parameters_input`<sup>Optional</sup> <a name="input_parameters_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParametersInput"></a>

```python
input_parameters_input: str
```

- *Type:* str

---

##### `organization_config_rule_trigger_types_input`<sup>Optional</sup> <a name="organization_config_rule_trigger_types_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput"></a>

```python
organization_config_rule_trigger_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_text_input`<sup>Optional</sup> <a name="policy_text_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyTextInput"></a>

```python
policy_text_input: str
```

- *Type:* str

---

##### `resource_id_scope_input`<sup>Optional</sup> <a name="resource_id_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```python
resource_id_scope_input: str
```

- *Type:* str

---

##### `resource_types_scope_input`<sup>Optional</sup> <a name="resource_types_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```python
resource_types_scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `tag_key_scope_input`<sup>Optional</sup> <a name="tag_key_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```python
tag_key_scope_input: str
```

- *Type:* str

---

##### `tag_value_scope_input`<sup>Optional</sup> <a name="tag_value_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```python
tag_value_scope_input: str
```

- *Type:* str

---

##### `debug_log_delivery_accounts`<sup>Required</sup> <a name="debug_log_delivery_accounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts"></a>

```python
debug_log_delivery_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

---

##### `organization_config_rule_trigger_types`<sup>Required</sup> <a name="organization_config_rule_trigger_types" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```python
organization_config_rule_trigger_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_text`<sup>Required</sup> <a name="policy_text" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText"></a>

```python
policy_text: str
```

- *Type:* str

---

##### `resource_id_scope`<sup>Required</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

---

##### `resource_types_scope`<sup>Required</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `tag_key_scope`<sup>Required</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

---

##### `tag_value_scope`<sup>Required</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---


### ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetInputParameters">reset_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetLambdaFunctionArn">reset_lambda_function_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetMaximumExecutionFrequency">reset_maximum_execution_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes">reset_organization_config_rule_trigger_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceIdScope">reset_resource_id_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceTypesScope">reset_resource_types_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagKeyScope">reset_tag_key_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagValueScope">reset_tag_value_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_input_parameters` <a name="reset_input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetInputParameters"></a>

```python
def reset_input_parameters() -> None
```

##### `reset_lambda_function_arn` <a name="reset_lambda_function_arn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetLambdaFunctionArn"></a>

```python
def reset_lambda_function_arn() -> None
```

##### `reset_maximum_execution_frequency` <a name="reset_maximum_execution_frequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetMaximumExecutionFrequency"></a>

```python
def reset_maximum_execution_frequency() -> None
```

##### `reset_organization_config_rule_trigger_types` <a name="reset_organization_config_rule_trigger_types" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes"></a>

```python
def reset_organization_config_rule_trigger_types() -> None
```

##### `reset_resource_id_scope` <a name="reset_resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceIdScope"></a>

```python
def reset_resource_id_scope() -> None
```

##### `reset_resource_types_scope` <a name="reset_resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceTypesScope"></a>

```python
def reset_resource_types_scope() -> None
```

##### `reset_tag_key_scope` <a name="reset_tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagKeyScope"></a>

```python
def reset_tag_key_scope() -> None
```

##### `reset_tag_value_scope` <a name="reset_tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagValueScope"></a>

```python
def reset_tag_value_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParametersInput">input_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArnInput">lambda_function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequencyInput">maximum_execution_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput">organization_config_rule_trigger_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScopeInput">resource_id_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScopeInput">resource_types_scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScopeInput">tag_key_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScopeInput">tag_value_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters">input_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">organization_config_rule_trigger_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `input_parameters_input`<sup>Optional</sup> <a name="input_parameters_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParametersInput"></a>

```python
input_parameters_input: str
```

- *Type:* str

---

##### `lambda_function_arn_input`<sup>Optional</sup> <a name="lambda_function_arn_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArnInput"></a>

```python
lambda_function_arn_input: str
```

- *Type:* str

---

##### `maximum_execution_frequency_input`<sup>Optional</sup> <a name="maximum_execution_frequency_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequencyInput"></a>

```python
maximum_execution_frequency_input: str
```

- *Type:* str

---

##### `organization_config_rule_trigger_types_input`<sup>Optional</sup> <a name="organization_config_rule_trigger_types_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput"></a>

```python
organization_config_rule_trigger_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_id_scope_input`<sup>Optional</sup> <a name="resource_id_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```python
resource_id_scope_input: str
```

- *Type:* str

---

##### `resource_types_scope_input`<sup>Optional</sup> <a name="resource_types_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```python
resource_types_scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key_scope_input`<sup>Optional</sup> <a name="tag_key_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```python
tag_key_scope_input: str
```

- *Type:* str

---

##### `tag_value_scope_input`<sup>Optional</sup> <a name="tag_value_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```python
tag_value_scope_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

---

##### `maximum_execution_frequency`<sup>Required</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

---

##### `organization_config_rule_trigger_types`<sup>Required</sup> <a name="organization_config_rule_trigger_types" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```python
organization_config_rule_trigger_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_id_scope`<sup>Required</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

---

##### `resource_types_scope`<sup>Required</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key_scope`<sup>Required</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

---

##### `tag_value_scope`<sup>Required</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---


### ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_config_rule

configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetInputParameters">reset_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetMaximumExecutionFrequency">reset_maximum_execution_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceIdScope">reset_resource_id_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceTypesScope">reset_resource_types_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetRuleIdentifier">reset_rule_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagKeyScope">reset_tag_key_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagValueScope">reset_tag_value_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_input_parameters` <a name="reset_input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetInputParameters"></a>

```python
def reset_input_parameters() -> None
```

##### `reset_maximum_execution_frequency` <a name="reset_maximum_execution_frequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetMaximumExecutionFrequency"></a>

```python
def reset_maximum_execution_frequency() -> None
```

##### `reset_resource_id_scope` <a name="reset_resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceIdScope"></a>

```python
def reset_resource_id_scope() -> None
```

##### `reset_resource_types_scope` <a name="reset_resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceTypesScope"></a>

```python
def reset_resource_types_scope() -> None
```

##### `reset_rule_identifier` <a name="reset_rule_identifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetRuleIdentifier"></a>

```python
def reset_rule_identifier() -> None
```

##### `reset_tag_key_scope` <a name="reset_tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagKeyScope"></a>

```python
def reset_tag_key_scope() -> None
```

##### `reset_tag_value_scope` <a name="reset_tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagValueScope"></a>

```python
def reset_tag_value_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParametersInput">input_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequencyInput">maximum_execution_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScopeInput">resource_id_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScopeInput">resource_types_scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifierInput">rule_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScopeInput">tag_key_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScopeInput">tag_value_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters">input_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier">rule_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `input_parameters_input`<sup>Optional</sup> <a name="input_parameters_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParametersInput"></a>

```python
input_parameters_input: str
```

- *Type:* str

---

##### `maximum_execution_frequency_input`<sup>Optional</sup> <a name="maximum_execution_frequency_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequencyInput"></a>

```python
maximum_execution_frequency_input: str
```

- *Type:* str

---

##### `resource_id_scope_input`<sup>Optional</sup> <a name="resource_id_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```python
resource_id_scope_input: str
```

- *Type:* str

---

##### `resource_types_scope_input`<sup>Optional</sup> <a name="resource_types_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```python
resource_types_scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_identifier_input`<sup>Optional</sup> <a name="rule_identifier_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifierInput"></a>

```python
rule_identifier_input: str
```

- *Type:* str

---

##### `tag_key_scope_input`<sup>Optional</sup> <a name="tag_key_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```python
tag_key_scope_input: str
```

- *Type:* str

---

##### `tag_value_scope_input`<sup>Optional</sup> <a name="tag_value_scope_input" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```python
tag_value_scope_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

---

##### `maximum_execution_frequency`<sup>Required</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

---

##### `resource_id_scope`<sup>Required</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

---

##### `resource_types_scope`<sup>Required</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_identifier`<sup>Required</sup> <a name="rule_identifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier"></a>

```python
rule_identifier: str
```

- *Type:* str

---

##### `tag_key_scope`<sup>Required</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

---

##### `tag_value_scope`<sup>Required</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---



