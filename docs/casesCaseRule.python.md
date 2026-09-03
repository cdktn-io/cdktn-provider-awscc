# `casesCaseRule` Submodule <a name="`casesCaseRule` Submodule" id="@cdktn/provider-awscc.casesCaseRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesCaseRule <a name="CasesCaseRule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule awscc_cases_case_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  rule: CasesCaseRuleRule,
  description: str = None,
  domain_id: str = None,
  tags: IResolvable | typing.List[CasesCaseRuleTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.name">name</a></code> | <code>str</code> | A descriptive name for the case rule. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | Defines the rule behavior and conditions. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.description">description</a></code> | <code>str</code> | A description explaining the purpose and behavior of this case rule. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>]</code> | The tags that you attach to this case rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.name"></a>

- *Type:* str

A descriptive name for the case rule.

Must be unique within the domain and should clearly indicate the rule's purpose (e.g., 'Priority Field Required for Urgent Cases').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#name CasesCaseRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

Defines the rule behavior and conditions.

Specifies the rule type and the conditions under which it applies. In the Amazon Connect admin website, this corresponds to case field conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#rule CasesCaseRule#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.description"></a>

- *Type:* str

A description explaining the purpose and behavior of this case rule.

Helps administrators understand when and why this rule applies to case fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#description CasesCaseRule#description}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.domainId"></a>

- *Type:* str

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#domain_id CasesCaseRule#domain_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>]

The tags that you attach to this case rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#tags CasesCaseRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putRule"></a>

```python
def put_rule(
  hidden: CasesCaseRuleRuleHidden = None,
  required: CasesCaseRuleRuleRequired = None
) -> None
```

###### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putRule.parameter.hidden"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

Hidden rule type, used to indicate whether a field is hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#hidden CasesCaseRule#hidden}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putRule.parameter.required"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

A required rule type, used to indicate whether a field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#required CasesCaseRule#required}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CasesCaseRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_id` <a name="reset_domain_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CasesCaseRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isConstruct"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CasesCaseRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CasesCaseRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CasesCaseRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CasesCaseRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleArn">case_rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleId">case_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference">CasesCaseRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList">CasesCaseRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `case_rule_arn`<sup>Required</sup> <a name="case_rule_arn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleArn"></a>

```python
case_rule_arn: str
```

- *Type:* str

---

##### `case_rule_id`<sup>Required</sup> <a name="case_rule_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.caseRuleId"></a>

```python
case_rule_id: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.rule"></a>

```python
rule: CasesCaseRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference">CasesCaseRuleRuleOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tags"></a>

```python
tags: CasesCaseRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList">CasesCaseRuleTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.ruleInput"></a>

```python
rule_input: IResolvable | CasesCaseRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CasesCaseRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CasesCaseRuleConfig <a name="CasesCaseRuleConfig" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  rule: CasesCaseRuleRule,
  description: str = None,
  domain_id: str = None,
  tags: IResolvable | typing.List[CasesCaseRuleTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.name">name</a></code> | <code>str</code> | A descriptive name for the case rule. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | Defines the rule behavior and conditions. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.description">description</a></code> | <code>str</code> | A description explaining the purpose and behavior of this case rule. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.domainId">domain_id</a></code> | <code>str</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>]</code> | The tags that you attach to this case rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive name for the case rule.

Must be unique within the domain and should clearly indicate the rule's purpose (e.g., 'Priority Field Required for Urgent Cases').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#name CasesCaseRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.rule"></a>

```python
rule: CasesCaseRuleRule
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

Defines the rule behavior and conditions.

Specifies the rule type and the conditions under which it applies. In the Amazon Connect admin website, this corresponds to case field conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#rule CasesCaseRule#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description explaining the purpose and behavior of this case rule.

Helps administrators understand when and why this rule applies to case fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#description CasesCaseRule#description}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#domain_id CasesCaseRule#domain_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CasesCaseRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>]

The tags that you attach to this case rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#tags CasesCaseRule#tags}

---

### CasesCaseRuleRule <a name="CasesCaseRuleRule" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRule(
  hidden: CasesCaseRuleRuleHidden = None,
  required: CasesCaseRuleRuleRequired = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.hidden">hidden</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a></code> | Hidden rule type, used to indicate whether a field is hidden. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.required">required</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a></code> | A required rule type, used to indicate whether a field is required. |

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.hidden"></a>

```python
hidden: CasesCaseRuleRuleHidden
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

Hidden rule type, used to indicate whether a field is hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#hidden CasesCaseRule#hidden}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule.property.required"></a>

```python
required: CasesCaseRuleRuleRequired
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

A required rule type, used to indicate whether a field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#required CasesCaseRule#required}

---

### CasesCaseRuleRuleHidden <a name="CasesCaseRuleRuleHidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHidden(
  conditions: IResolvable | typing.List[CasesCaseRuleRuleHiddenConditions] = None,
  default_value: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>]</code> | List of conditions for the hidden rule; |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.defaultValue">default_value</a></code> | <code>bool \| cdktn.IResolvable</code> | The value of the rule (i.e. whether the field is hidden) should none of the conditions evaluate to true. |

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.conditions"></a>

```python
conditions: IResolvable | typing.List[CasesCaseRuleRuleHiddenConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>]

List of conditions for the hidden rule;

the first condition to evaluate to true dictates the value of the rule

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#conditions CasesCaseRule#conditions}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden.property.defaultValue"></a>

```python
default_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The value of the rule (i.e. whether the field is hidden) should none of the conditions evaluate to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#default_value CasesCaseRule#default_value}

---

### CasesCaseRuleRuleHiddenConditions <a name="CasesCaseRuleRuleHiddenConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditions(
  equal_to: CasesCaseRuleRuleHiddenConditionsEqualTo = None,
  not_equal_to: CasesCaseRuleRuleHiddenConditionsNotEqualTo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.equalTo">equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | Boolean operands for a condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.notEqualTo">not_equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | Boolean operands for a condition. |

---

##### `equal_to`<sup>Optional</sup> <a name="equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.equalTo"></a>

```python
equal_to: CasesCaseRuleRuleHiddenConditionsEqualTo
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#equal_to CasesCaseRule#equal_to}

---

##### `not_equal_to`<sup>Optional</sup> <a name="not_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions.property.notEqualTo"></a>

```python
not_equal_to: CasesCaseRuleRuleHiddenConditionsNotEqualTo
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#not_equal_to CasesCaseRule#not_equal_to}

---

### CasesCaseRuleRuleHiddenConditionsEqualTo <a name="CasesCaseRuleRuleHiddenConditionsEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo(
  operand_one: CasesCaseRuleRuleHiddenConditionsEqualToOperandOne = None,
  operand_two: CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo = None,
  result: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.result">result</a></code> | <code>bool \| cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `operand_one`<sup>Optional</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandOne"></a>

```python
operand_one: CasesCaseRuleRuleHiddenConditionsEqualToOperandOne
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `operand_two`<sup>Optional</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.operandTwo"></a>

```python
operand_two: CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo.property.result"></a>

```python
result: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleHiddenConditionsEqualToOperandOne <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne(
  field_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne.property.fieldId">field_id</a></code> | <code>str</code> | The field ID this operand should take the value of. |

---

##### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo(
  boolean_value: bool | IResolvable = None,
  double_value: typing.Union[int, float] = None,
  empty_value: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.emptyValue">empty_value</a></code> | <code>str</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.stringValue">string_value</a></code> | <code>str</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `empty_value`<sup>Optional</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleRuleHiddenConditionsNotEqualTo <a name="CasesCaseRuleRuleHiddenConditionsNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo(
  operand_one: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne = None,
  operand_two: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo = None,
  result: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.result">result</a></code> | <code>bool \| cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `operand_one`<sup>Optional</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandOne"></a>

```python
operand_one: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `operand_two`<sup>Optional</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.operandTwo"></a>

```python
operand_two: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo.property.result"></a>

```python
result: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne(
  field_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.property.fieldId">field_id</a></code> | <code>str</code> | The field ID this operand should take the value of. |

---

##### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo(
  boolean_value: bool | IResolvable = None,
  double_value: typing.Union[int, float] = None,
  empty_value: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.emptyValue">empty_value</a></code> | <code>str</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.stringValue">string_value</a></code> | <code>str</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `empty_value`<sup>Optional</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleRuleRequired <a name="CasesCaseRuleRuleRequired" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequired(
  conditions: IResolvable | typing.List[CasesCaseRuleRuleRequiredConditions] = None,
  default_value: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>]</code> | An ordered list of boolean conditions that determine when the field should be required. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.defaultValue">default_value</a></code> | <code>bool \| cdktn.IResolvable</code> | The default required state for the field when none of the specified conditions are met. |

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.conditions"></a>

```python
conditions: IResolvable | typing.List[CasesCaseRuleRuleRequiredConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>]

An ordered list of boolean conditions that determine when the field should be required.

Conditions are evaluated in order, and the first condition that evaluates to true determines whether the field is required, overriding the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#conditions CasesCaseRule#conditions}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired.property.defaultValue"></a>

```python
default_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The default required state for the field when none of the specified conditions are met.

If true, the field is required by default; if false, the field is optional by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#default_value CasesCaseRule#default_value}

---

### CasesCaseRuleRuleRequiredConditions <a name="CasesCaseRuleRuleRequiredConditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditions(
  equal_to: CasesCaseRuleRuleRequiredConditionsEqualTo = None,
  not_equal_to: CasesCaseRuleRuleRequiredConditionsNotEqualTo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.equalTo">equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | Boolean operands for a condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.notEqualTo">not_equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | Boolean operands for a condition. |

---

##### `equal_to`<sup>Optional</sup> <a name="equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.equalTo"></a>

```python
equal_to: CasesCaseRuleRuleRequiredConditionsEqualTo
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#equal_to CasesCaseRule#equal_to}

---

##### `not_equal_to`<sup>Optional</sup> <a name="not_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions.property.notEqualTo"></a>

```python
not_equal_to: CasesCaseRuleRuleRequiredConditionsNotEqualTo
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

Boolean operands for a condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#not_equal_to CasesCaseRule#not_equal_to}

---

### CasesCaseRuleRuleRequiredConditionsEqualTo <a name="CasesCaseRuleRuleRequiredConditionsEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo(
  operand_one: CasesCaseRuleRuleRequiredConditionsEqualToOperandOne = None,
  operand_two: CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo = None,
  result: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.result">result</a></code> | <code>bool \| cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `operand_one`<sup>Optional</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandOne"></a>

```python
operand_one: CasesCaseRuleRuleRequiredConditionsEqualToOperandOne
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `operand_two`<sup>Optional</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.operandTwo"></a>

```python
operand_two: CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo.property.result"></a>

```python
result: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleRequiredConditionsEqualToOperandOne <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne(
  field_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne.property.fieldId">field_id</a></code> | <code>str</code> | The field ID this operand should take the value of. |

---

##### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo(
  boolean_value: bool | IResolvable = None,
  double_value: typing.Union[int, float] = None,
  empty_value: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.emptyValue">empty_value</a></code> | <code>str</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.stringValue">string_value</a></code> | <code>str</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `empty_value`<sup>Optional</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleRuleRequiredConditionsNotEqualTo <a name="CasesCaseRuleRuleRequiredConditionsNotEqualTo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo(
  operand_one: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne = None,
  operand_two: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo = None,
  result: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | The left hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | The right hand operand in the condition. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.result">result</a></code> | <code>bool \| cdktn.IResolvable</code> | The value of the outer rule if the condition evaluates to true. |

---

##### `operand_one`<sup>Optional</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandOne"></a>

```python
operand_one: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

##### `operand_two`<sup>Optional</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.operandTwo"></a>

```python
operand_two: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo.property.result"></a>

```python
result: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne(
  field_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.property.fieldId">field_id</a></code> | <code>str</code> | The field ID this operand should take the value of. |

---

##### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo(
  boolean_value: bool | IResolvable = None,
  double_value: typing.Union[int, float] = None,
  empty_value: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | A numeric value to compare against the field value in the condition evaluation. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.emptyValue">empty_value</a></code> | <code>str</code> | An empty operand value. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.stringValue">string_value</a></code> | <code>str</code> | A string value to compare against the field value in the condition evaluation. |

---

##### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

##### `empty_value`<sup>Optional</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

### CasesCaseRuleTags <a name="CasesCaseRuleTags" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#key CasesCaseRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#value CasesCaseRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resetFieldId">reset_field_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_id` <a name="reset_field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resetFieldId"></a>

```python
def reset_field_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldIdInput">field_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id_input`<sup>Optional</sup> <a name="field_id_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```python
field_id_input: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleHiddenConditionsEqualToOperandOne
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

---


### CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetBooleanValue">reset_boolean_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetEmptyValue">reset_empty_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boolean_value` <a name="reset_boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```python
def reset_boolean_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_empty_value` <a name="reset_empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```python
def reset_empty_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValueInput">boolean_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValueInput">empty_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValue">empty_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value_input`<sup>Optional</sup> <a name="boolean_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```python
boolean_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value_input`<sup>Optional</sup> <a name="empty_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```python
empty_value_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value`<sup>Required</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

---


### CasesCaseRuleRuleHiddenConditionsEqualToOutputReference <a name="CasesCaseRuleRuleHiddenConditionsEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandOne">put_operand_one</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo">put_operand_two</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandOne">reset_operand_one</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandTwo">reset_operand_two</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetResult">reset_result</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operand_one` <a name="put_operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandOne"></a>

```python
def put_operand_one(
  field_id: str = None
) -> None
```

###### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandOne.parameter.fieldId"></a>

- *Type:* str

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

##### `put_operand_two` <a name="put_operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo"></a>

```python
def put_operand_two(
  boolean_value: bool | IResolvable = None,
  double_value: typing.Union[int, float] = None,
  empty_value: str = None,
  string_value: str = None
) -> None
```

###### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo.parameter.booleanValue"></a>

- *Type:* bool | cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

###### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo.parameter.doubleValue"></a>

- *Type:* typing.Union[int, float]

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

###### `empty_value`<sup>Optional</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo.parameter.emptyValue"></a>

- *Type:* str

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.putOperandTwo.parameter.stringValue"></a>

- *Type:* str

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

##### `reset_operand_one` <a name="reset_operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandOne"></a>

```python
def reset_operand_one() -> None
```

##### `reset_operand_two` <a name="reset_operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetOperandTwo"></a>

```python
def reset_operand_two() -> None
```

##### `reset_result` <a name="reset_result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resetResult"></a>

```python
def reset_result() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOneInput">operand_one_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwoInput">operand_two_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.resultInput">result_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.result">result</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operand_one`<sup>Required</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOne"></a>

```python
operand_one: CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference</a>

---

##### `operand_two`<sup>Required</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwo"></a>

```python
operand_two: CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference</a>

---

##### `operand_one_input`<sup>Optional</sup> <a name="operand_one_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOneInput"></a>

```python
operand_one_input: IResolvable | CasesCaseRuleRuleHiddenConditionsEqualToOperandOne
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

---

##### `operand_two_input`<sup>Optional</sup> <a name="operand_two_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwoInput"></a>

```python
operand_two_input: IResolvable | CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

---

##### `result_input`<sup>Optional</sup> <a name="result_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.resultInput"></a>

```python
result_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.result"></a>

```python
result: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleHiddenConditionsEqualTo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

---


### CasesCaseRuleRuleHiddenConditionsList <a name="CasesCaseRuleRuleHiddenConditionsList" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesCaseRuleRuleHiddenConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesCaseRuleRuleHiddenConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>]

---


### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resetFieldId">reset_field_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_id` <a name="reset_field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resetFieldId"></a>

```python
def reset_field_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput">field_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id_input`<sup>Optional</sup> <a name="field_id_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```python
field_id_input: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

---


### CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue">reset_boolean_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue">reset_empty_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boolean_value` <a name="reset_boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```python
def reset_boolean_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_empty_value` <a name="reset_empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```python
def reset_empty_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput">boolean_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput">empty_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValue">empty_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value_input`<sup>Optional</sup> <a name="boolean_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```python
boolean_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value_input`<sup>Optional</sup> <a name="empty_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```python
empty_value_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value`<sup>Required</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

---


### CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference <a name="CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandOne">put_operand_one</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo">put_operand_two</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandOne">reset_operand_one</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandTwo">reset_operand_two</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetResult">reset_result</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operand_one` <a name="put_operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandOne"></a>

```python
def put_operand_one(
  field_id: str = None
) -> None
```

###### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandOne.parameter.fieldId"></a>

- *Type:* str

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

##### `put_operand_two` <a name="put_operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo"></a>

```python
def put_operand_two(
  boolean_value: bool | IResolvable = None,
  double_value: typing.Union[int, float] = None,
  empty_value: str = None,
  string_value: str = None
) -> None
```

###### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo.parameter.booleanValue"></a>

- *Type:* bool | cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

###### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo.parameter.doubleValue"></a>

- *Type:* typing.Union[int, float]

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

###### `empty_value`<sup>Optional</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo.parameter.emptyValue"></a>

- *Type:* str

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.putOperandTwo.parameter.stringValue"></a>

- *Type:* str

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

##### `reset_operand_one` <a name="reset_operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandOne"></a>

```python
def reset_operand_one() -> None
```

##### `reset_operand_two` <a name="reset_operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetOperandTwo"></a>

```python
def reset_operand_two() -> None
```

##### `reset_result` <a name="reset_result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resetResult"></a>

```python
def reset_result() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOneInput">operand_one_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwoInput">operand_two_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.resultInput">result_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.result">result</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operand_one`<sup>Required</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOne"></a>

```python
operand_one: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference</a>

---

##### `operand_two`<sup>Required</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwo"></a>

```python
operand_two: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference</a>

---

##### `operand_one_input`<sup>Optional</sup> <a name="operand_one_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOneInput"></a>

```python
operand_one_input: IResolvable | CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

---

##### `operand_two_input`<sup>Optional</sup> <a name="operand_two_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwoInput"></a>

```python
operand_two_input: IResolvable | CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

---

##### `result_input`<sup>Optional</sup> <a name="result_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.resultInput"></a>

```python
result_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.result"></a>

```python
result: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleHiddenConditionsNotEqualTo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

---


### CasesCaseRuleRuleHiddenConditionsOutputReference <a name="CasesCaseRuleRuleHiddenConditionsOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo">put_equal_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo">put_not_equal_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetEqualTo">reset_equal_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetNotEqualTo">reset_not_equal_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_equal_to` <a name="put_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo"></a>

```python
def put_equal_to(
  operand_one: CasesCaseRuleRuleHiddenConditionsEqualToOperandOne = None,
  operand_two: CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo = None,
  result: bool | IResolvable = None
) -> None
```

###### `operand_one`<sup>Optional</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo.parameter.operandOne"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

###### `operand_two`<sup>Optional</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo.parameter.operandTwo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

###### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putEqualTo.parameter.result"></a>

- *Type:* bool | cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

##### `put_not_equal_to` <a name="put_not_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo"></a>

```python
def put_not_equal_to(
  operand_one: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne = None,
  operand_two: CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo = None,
  result: bool | IResolvable = None
) -> None
```

###### `operand_one`<sup>Optional</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo.parameter.operandOne"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

###### `operand_two`<sup>Optional</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo.parameter.operandTwo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">CasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

###### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.putNotEqualTo.parameter.result"></a>

- *Type:* bool | cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

##### `reset_equal_to` <a name="reset_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetEqualTo"></a>

```python
def reset_equal_to() -> None
```

##### `reset_not_equal_to` <a name="reset_not_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.resetNotEqualTo"></a>

```python
def reset_not_equal_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalTo">equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualTo">not_equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalToInput">equal_to_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualToInput">not_equal_to_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `equal_to`<sup>Required</sup> <a name="equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalTo"></a>

```python
equal_to: CasesCaseRuleRuleHiddenConditionsEqualToOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsEqualToOutputReference</a>

---

##### `not_equal_to`<sup>Required</sup> <a name="not_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualTo"></a>

```python
not_equal_to: CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference">CasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference</a>

---

##### `equal_to_input`<sup>Optional</sup> <a name="equal_to_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.equalToInput"></a>

```python
equal_to_input: IResolvable | CasesCaseRuleRuleHiddenConditionsEqualTo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsEqualTo">CasesCaseRuleRuleHiddenConditionsEqualTo</a>

---

##### `not_equal_to_input`<sup>Optional</sup> <a name="not_equal_to_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualToInput"></a>

```python
not_equal_to_input: IResolvable | CasesCaseRuleRuleHiddenConditionsNotEqualTo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsNotEqualTo">CasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleHiddenConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>

---


### CasesCaseRuleRuleHiddenOutputReference <a name="CasesCaseRuleRuleHiddenOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleHiddenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[CasesCaseRuleRuleHiddenConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>]

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList">CasesCaseRuleRuleHiddenConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValue">default_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditions"></a>

```python
conditions: CasesCaseRuleRuleHiddenConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditionsList">CasesCaseRuleRuleHiddenConditionsList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[CasesCaseRuleRuleHiddenConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>]

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValueInput"></a>

```python
default_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.defaultValue"></a>

```python
default_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleHidden
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

---


### CasesCaseRuleRuleOutputReference <a name="CasesCaseRuleRuleOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putHidden">put_hidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putRequired">put_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetHidden">reset_hidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hidden` <a name="put_hidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putHidden"></a>

```python
def put_hidden(
  conditions: IResolvable | typing.List[CasesCaseRuleRuleHiddenConditions] = None,
  default_value: bool | IResolvable = None
) -> None
```

###### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putHidden.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenConditions">CasesCaseRuleRuleHiddenConditions</a>]

List of conditions for the hidden rule;

the first condition to evaluate to true dictates the value of the rule

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#conditions CasesCaseRule#conditions}

---

###### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putHidden.parameter.defaultValue"></a>

- *Type:* bool | cdktn.IResolvable

The value of the rule (i.e. whether the field is hidden) should none of the conditions evaluate to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#default_value CasesCaseRule#default_value}

---

##### `put_required` <a name="put_required" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putRequired"></a>

```python
def put_required(
  conditions: IResolvable | typing.List[CasesCaseRuleRuleRequiredConditions] = None,
  default_value: bool | IResolvable = None
) -> None
```

###### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putRequired.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>]

An ordered list of boolean conditions that determine when the field should be required.

Conditions are evaluated in order, and the first condition that evaluates to true determines whether the field is required, overriding the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#conditions CasesCaseRule#conditions}

---

###### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.putRequired.parameter.defaultValue"></a>

- *Type:* bool | cdktn.IResolvable

The default required state for the field when none of the specified conditions are met.

If true, the field is required by default; if false, the field is optional by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#default_value CasesCaseRule#default_value}

---

##### `reset_hidden` <a name="reset_hidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetHidden"></a>

```python
def reset_hidden() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hidden">hidden</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference">CasesCaseRuleRuleHiddenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.required">required</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference">CasesCaseRuleRuleRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hiddenInput">hidden_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.requiredInput">required_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hidden"></a>

```python
hidden: CasesCaseRuleRuleHiddenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHiddenOutputReference">CasesCaseRuleRuleHiddenOutputReference</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.required"></a>

```python
required: CasesCaseRuleRuleRequiredOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference">CasesCaseRuleRuleRequiredOutputReference</a>

---

##### `hidden_input`<sup>Optional</sup> <a name="hidden_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.hiddenInput"></a>

```python
hidden_input: IResolvable | CasesCaseRuleRuleHidden
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleHidden">CasesCaseRuleRuleHidden</a>

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.requiredInput"></a>

```python
required_input: IResolvable | CasesCaseRuleRuleRequired
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRule">CasesCaseRuleRule</a>

---


### CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resetFieldId">reset_field_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_id` <a name="reset_field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resetFieldId"></a>

```python
def reset_field_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldIdInput">field_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id_input`<sup>Optional</sup> <a name="field_id_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```python
field_id_input: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleRequiredConditionsEqualToOperandOne
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

---


### CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetBooleanValue">reset_boolean_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetEmptyValue">reset_empty_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boolean_value` <a name="reset_boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```python
def reset_boolean_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_empty_value` <a name="reset_empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```python
def reset_empty_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValueInput">boolean_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValueInput">empty_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValue">empty_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value_input`<sup>Optional</sup> <a name="boolean_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```python
boolean_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value_input`<sup>Optional</sup> <a name="empty_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```python
empty_value_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value`<sup>Required</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

---


### CasesCaseRuleRuleRequiredConditionsEqualToOutputReference <a name="CasesCaseRuleRuleRequiredConditionsEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandOne">put_operand_one</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo">put_operand_two</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandOne">reset_operand_one</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandTwo">reset_operand_two</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetResult">reset_result</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operand_one` <a name="put_operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandOne"></a>

```python
def put_operand_one(
  field_id: str = None
) -> None
```

###### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandOne.parameter.fieldId"></a>

- *Type:* str

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

##### `put_operand_two` <a name="put_operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo"></a>

```python
def put_operand_two(
  boolean_value: bool | IResolvable = None,
  double_value: typing.Union[int, float] = None,
  empty_value: str = None,
  string_value: str = None
) -> None
```

###### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo.parameter.booleanValue"></a>

- *Type:* bool | cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

###### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo.parameter.doubleValue"></a>

- *Type:* typing.Union[int, float]

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

###### `empty_value`<sup>Optional</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo.parameter.emptyValue"></a>

- *Type:* str

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.putOperandTwo.parameter.stringValue"></a>

- *Type:* str

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

##### `reset_operand_one` <a name="reset_operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandOne"></a>

```python
def reset_operand_one() -> None
```

##### `reset_operand_two` <a name="reset_operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetOperandTwo"></a>

```python
def reset_operand_two() -> None
```

##### `reset_result` <a name="reset_result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resetResult"></a>

```python
def reset_result() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOneInput">operand_one_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwoInput">operand_two_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.resultInput">result_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.result">result</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operand_one`<sup>Required</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOne"></a>

```python
operand_one: CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference</a>

---

##### `operand_two`<sup>Required</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwo"></a>

```python
operand_two: CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference</a>

---

##### `operand_one_input`<sup>Optional</sup> <a name="operand_one_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOneInput"></a>

```python
operand_one_input: IResolvable | CasesCaseRuleRuleRequiredConditionsEqualToOperandOne
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

---

##### `operand_two_input`<sup>Optional</sup> <a name="operand_two_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwoInput"></a>

```python
operand_two_input: IResolvable | CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

---

##### `result_input`<sup>Optional</sup> <a name="result_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.resultInput"></a>

```python
result_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.result"></a>

```python
result: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleRequiredConditionsEqualTo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

---


### CasesCaseRuleRuleRequiredConditionsList <a name="CasesCaseRuleRuleRequiredConditionsList" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesCaseRuleRuleRequiredConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesCaseRuleRuleRequiredConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>]

---


### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resetFieldId">reset_field_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_id` <a name="reset_field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resetFieldId"></a>

```python
def reset_field_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput">field_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id_input`<sup>Optional</sup> <a name="field_id_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldIdInput"></a>

```python
field_id_input: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

---


### CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue">reset_boolean_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue">reset_empty_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boolean_value` <a name="reset_boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetBooleanValue"></a>

```python
def reset_boolean_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_empty_value` <a name="reset_empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetEmptyValue"></a>

```python
def reset_empty_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput">boolean_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput">empty_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValue">empty_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value_input`<sup>Optional</sup> <a name="boolean_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValueInput"></a>

```python
boolean_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value_input`<sup>Optional</sup> <a name="empty_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValueInput"></a>

```python
empty_value_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value`<sup>Required</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

---


### CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference <a name="CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandOne">put_operand_one</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo">put_operand_two</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandOne">reset_operand_one</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandTwo">reset_operand_two</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetResult">reset_result</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operand_one` <a name="put_operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandOne"></a>

```python
def put_operand_one(
  field_id: str = None
) -> None
```

###### `field_id`<sup>Optional</sup> <a name="field_id" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandOne.parameter.fieldId"></a>

- *Type:* str

The field ID this operand should take the value of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#field_id CasesCaseRule#field_id}

---

##### `put_operand_two` <a name="put_operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo"></a>

```python
def put_operand_two(
  boolean_value: bool | IResolvable = None,
  double_value: typing.Union[int, float] = None,
  empty_value: str = None,
  string_value: str = None
) -> None
```

###### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo.parameter.booleanValue"></a>

- *Type:* bool | cdktn.IResolvable

A boolean value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#boolean_value CasesCaseRule#boolean_value}

---

###### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo.parameter.doubleValue"></a>

- *Type:* typing.Union[int, float]

A numeric value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#double_value CasesCaseRule#double_value}

---

###### `empty_value`<sup>Optional</sup> <a name="empty_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo.parameter.emptyValue"></a>

- *Type:* str

An empty operand value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#empty_value CasesCaseRule#empty_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.putOperandTwo.parameter.stringValue"></a>

- *Type:* str

A string value to compare against the field value in the condition evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#string_value CasesCaseRule#string_value}

---

##### `reset_operand_one` <a name="reset_operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandOne"></a>

```python
def reset_operand_one() -> None
```

##### `reset_operand_two` <a name="reset_operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetOperandTwo"></a>

```python
def reset_operand_two() -> None
```

##### `reset_result` <a name="reset_result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resetResult"></a>

```python
def reset_result() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOneInput">operand_one_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwoInput">operand_two_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.resultInput">result_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.result">result</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operand_one`<sup>Required</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOne"></a>

```python
operand_one: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference</a>

---

##### `operand_two`<sup>Required</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwo"></a>

```python
operand_two: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference</a>

---

##### `operand_one_input`<sup>Optional</sup> <a name="operand_one_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOneInput"></a>

```python
operand_one_input: IResolvable | CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

---

##### `operand_two_input`<sup>Optional</sup> <a name="operand_two_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwoInput"></a>

```python
operand_two_input: IResolvable | CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

---

##### `result_input`<sup>Optional</sup> <a name="result_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.resultInput"></a>

```python
result_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.result"></a>

```python
result: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleRequiredConditionsNotEqualTo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

---


### CasesCaseRuleRuleRequiredConditionsOutputReference <a name="CasesCaseRuleRuleRequiredConditionsOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo">put_equal_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo">put_not_equal_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetEqualTo">reset_equal_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetNotEqualTo">reset_not_equal_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_equal_to` <a name="put_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo"></a>

```python
def put_equal_to(
  operand_one: CasesCaseRuleRuleRequiredConditionsEqualToOperandOne = None,
  operand_two: CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo = None,
  result: bool | IResolvable = None
) -> None
```

###### `operand_one`<sup>Optional</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo.parameter.operandOne"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

###### `operand_two`<sup>Optional</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo.parameter.operandTwo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

###### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putEqualTo.parameter.result"></a>

- *Type:* bool | cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

##### `put_not_equal_to` <a name="put_not_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo"></a>

```python
def put_not_equal_to(
  operand_one: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne = None,
  operand_two: CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo = None,
  result: bool | IResolvable = None
) -> None
```

###### `operand_one`<sup>Optional</sup> <a name="operand_one" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo.parameter.operandOne"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

The left hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_one CasesCaseRule#operand_one}

---

###### `operand_two`<sup>Optional</sup> <a name="operand_two" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo.parameter.operandTwo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">CasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

The right hand operand in the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#operand_two CasesCaseRule#operand_two}

---

###### `result`<sup>Optional</sup> <a name="result" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.putNotEqualTo.parameter.result"></a>

- *Type:* bool | cdktn.IResolvable

The value of the outer rule if the condition evaluates to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cases_case_rule#result CasesCaseRule#result}

---

##### `reset_equal_to` <a name="reset_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetEqualTo"></a>

```python
def reset_equal_to() -> None
```

##### `reset_not_equal_to` <a name="reset_not_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.resetNotEqualTo"></a>

```python
def reset_not_equal_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalTo">equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualTo">not_equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalToInput">equal_to_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualToInput">not_equal_to_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `equal_to`<sup>Required</sup> <a name="equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalTo"></a>

```python
equal_to: CasesCaseRuleRuleRequiredConditionsEqualToOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsEqualToOutputReference</a>

---

##### `not_equal_to`<sup>Required</sup> <a name="not_equal_to" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualTo"></a>

```python
not_equal_to: CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference">CasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference</a>

---

##### `equal_to_input`<sup>Optional</sup> <a name="equal_to_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.equalToInput"></a>

```python
equal_to_input: IResolvable | CasesCaseRuleRuleRequiredConditionsEqualTo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsEqualTo">CasesCaseRuleRuleRequiredConditionsEqualTo</a>

---

##### `not_equal_to_input`<sup>Optional</sup> <a name="not_equal_to_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualToInput"></a>

```python
not_equal_to_input: IResolvable | CasesCaseRuleRuleRequiredConditionsNotEqualTo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsNotEqualTo">CasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleRequiredConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>

---


### CasesCaseRuleRuleRequiredOutputReference <a name="CasesCaseRuleRuleRequiredOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleRuleRequiredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[CasesCaseRuleRuleRequiredConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>]

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList">CasesCaseRuleRuleRequiredConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValue">default_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditions"></a>

```python
conditions: CasesCaseRuleRuleRequiredConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditionsList">CasesCaseRuleRuleRequiredConditionsList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[CasesCaseRuleRuleRequiredConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredConditions">CasesCaseRuleRuleRequiredConditions</a>]

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValueInput"></a>

```python
default_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.defaultValue"></a>

```python
default_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequiredOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleRuleRequired
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleRuleRequired">CasesCaseRuleRuleRequired</a>

---


### CasesCaseRuleTagsList <a name="CasesCaseRuleTagsList" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CasesCaseRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CasesCaseRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>]

---


### CasesCaseRuleTagsOutputReference <a name="CasesCaseRuleTagsOutputReference" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cases_case_rule

casesCaseRule.CasesCaseRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CasesCaseRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesCaseRule.CasesCaseRuleTags">CasesCaseRuleTags</a>

---



