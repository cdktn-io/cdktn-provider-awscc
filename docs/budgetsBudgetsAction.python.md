# `budgetsBudgetsAction` Submodule <a name="`budgetsBudgetsAction` Submodule" id="@cdktn/provider-awscc.budgetsBudgetsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudgetsAction <a name="BudgetsBudgetsAction" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action awscc_budgets_budgets_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsAction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_threshold: BudgetsBudgetsActionActionThreshold,
  action_type: str,
  budget_name: str,
  definition: BudgetsBudgetsActionDefinition,
  execution_role_arn: str,
  notification_type: str,
  subscribers: IResolvable | typing.List[BudgetsBudgetsActionSubscribers],
  approval_model: str = None,
  resource_tags: IResolvable | typing.List[BudgetsBudgetsActionResourceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.actionThreshold">action_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.budgetName">budget_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.notificationType">notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.subscribers">subscribers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.approvalModel">approval_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_threshold`<sup>Required</sup> <a name="action_threshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.actionThreshold"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}.

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.actionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}.

---

##### `budget_name`<sup>Required</sup> <a name="budget_name" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.budgetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.definition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}.

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}.

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.notificationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}.

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.subscribers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}.

---

##### `approval_model`<sup>Optional</sup> <a name="approval_model" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.approvalModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.resourceTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold">put_action_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition">put_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags">put_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers">put_subscribers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetApprovalModel">reset_approval_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetResourceTags">reset_resource_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action_threshold` <a name="put_action_threshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold"></a>

```python
def put_action_threshold(
  type: str,
  value: typing.Union[int, float]
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}.

---

##### `put_definition` <a name="put_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition"></a>

```python
def put_definition(
  iam_action_definition: BudgetsBudgetsActionDefinitionIamActionDefinition = None,
  scp_action_definition: BudgetsBudgetsActionDefinitionScpActionDefinition = None,
  ssm_action_definition: BudgetsBudgetsActionDefinitionSsmActionDefinition = None
) -> None
```

###### `iam_action_definition`<sup>Optional</sup> <a name="iam_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition.parameter.iamActionDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#iam_action_definition BudgetsBudgetsAction#iam_action_definition}.

---

###### `scp_action_definition`<sup>Optional</sup> <a name="scp_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition.parameter.scpActionDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#scp_action_definition BudgetsBudgetsAction#scp_action_definition}.

---

###### `ssm_action_definition`<sup>Optional</sup> <a name="ssm_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition.parameter.ssmActionDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#ssm_action_definition BudgetsBudgetsAction#ssm_action_definition}.

---

##### `put_resource_tags` <a name="put_resource_tags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags"></a>

```python
def put_resource_tags(
  value: IResolvable | typing.List[BudgetsBudgetsActionResourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>]

---

##### `put_subscribers` <a name="put_subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers"></a>

```python
def put_subscribers(
  value: IResolvable | typing.List[BudgetsBudgetsActionSubscribers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>]

---

##### `reset_approval_model` <a name="reset_approval_model" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetApprovalModel"></a>

```python
def reset_approval_model() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BudgetsBudgetsAction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BudgetsBudgetsAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BudgetsBudgetsAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BudgetsBudgetsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BudgetsBudgetsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThreshold">action_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference">BudgetsBudgetsActionActionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTags">resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList">BudgetsBudgetsActionResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribers">subscribers</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList">BudgetsBudgetsActionSubscribersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThresholdInput">action_threshold_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModelInput">approval_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetNameInput">budget_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definitionInput">definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationTypeInput">notification_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTagsInput">resource_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribersInput">subscribers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModel">approval_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetName">budget_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationType">notification_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `action_threshold`<sup>Required</sup> <a name="action_threshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThreshold"></a>

```python
action_threshold: BudgetsBudgetsActionActionThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference">BudgetsBudgetsActionActionThresholdOutputReference</a>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definition"></a>

```python
definition: BudgetsBudgetsActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTags"></a>

```python
resource_tags: BudgetsBudgetsActionResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList">BudgetsBudgetsActionResourceTagsList</a>

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribers"></a>

```python
subscribers: BudgetsBudgetsActionSubscribersList
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList">BudgetsBudgetsActionSubscribersList</a>

---

##### `action_threshold_input`<sup>Optional</sup> <a name="action_threshold_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThresholdInput"></a>

```python
action_threshold_input: IResolvable | BudgetsBudgetsActionActionThreshold
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `approval_model_input`<sup>Optional</sup> <a name="approval_model_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModelInput"></a>

```python
approval_model_input: str
```

- *Type:* str

---

##### `budget_name_input`<sup>Optional</sup> <a name="budget_name_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetNameInput"></a>

```python
budget_name_input: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definitionInput"></a>

```python
definition_input: IResolvable | BudgetsBudgetsActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `notification_type_input`<sup>Optional</sup> <a name="notification_type_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationTypeInput"></a>

```python
notification_type_input: str
```

- *Type:* str

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTagsInput"></a>

```python
resource_tags_input: IResolvable | typing.List[BudgetsBudgetsActionResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>]

---

##### `subscribers_input`<sup>Optional</sup> <a name="subscribers_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribersInput"></a>

```python
subscribers_input: IResolvable | typing.List[BudgetsBudgetsActionSubscribers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>]

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `approval_model`<sup>Required</sup> <a name="approval_model" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModel"></a>

```python
approval_model: str
```

- *Type:* str

---

##### `budget_name`<sup>Required</sup> <a name="budget_name" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetName"></a>

```python
budget_name: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetsActionActionThreshold <a name="BudgetsBudgetsActionActionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold(
  type: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}.

---

### BudgetsBudgetsActionConfig <a name="BudgetsBudgetsActionConfig" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_threshold: BudgetsBudgetsActionActionThreshold,
  action_type: str,
  budget_name: str,
  definition: BudgetsBudgetsActionDefinition,
  execution_role_arn: str,
  notification_type: str,
  subscribers: IResolvable | typing.List[BudgetsBudgetsActionSubscribers],
  approval_model: str = None,
  resource_tags: IResolvable | typing.List[BudgetsBudgetsActionResourceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionThreshold">action_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.budgetName">budget_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.notificationType">notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.subscribers">subscribers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.approvalModel">approval_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_threshold`<sup>Required</sup> <a name="action_threshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionThreshold"></a>

```python
action_threshold: BudgetsBudgetsActionActionThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}.

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}.

---

##### `budget_name`<sup>Required</sup> <a name="budget_name" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.budgetName"></a>

```python
budget_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.definition"></a>

```python
definition: BudgetsBudgetsActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}.

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}.

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}.

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.subscribers"></a>

```python
subscribers: IResolvable | typing.List[BudgetsBudgetsActionSubscribers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}.

---

##### `approval_model`<sup>Optional</sup> <a name="approval_model" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.approvalModel"></a>

```python
approval_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.resourceTags"></a>

```python
resource_tags: IResolvable | typing.List[BudgetsBudgetsActionResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}.

---

### BudgetsBudgetsActionDefinition <a name="BudgetsBudgetsActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionDefinition(
  iam_action_definition: BudgetsBudgetsActionDefinitionIamActionDefinition = None,
  scp_action_definition: BudgetsBudgetsActionDefinitionScpActionDefinition = None,
  ssm_action_definition: BudgetsBudgetsActionDefinitionSsmActionDefinition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.iamActionDefinition">iam_action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#iam_action_definition BudgetsBudgetsAction#iam_action_definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.scpActionDefinition">scp_action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#scp_action_definition BudgetsBudgetsAction#scp_action_definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.ssmActionDefinition">ssm_action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#ssm_action_definition BudgetsBudgetsAction#ssm_action_definition}. |

---

##### `iam_action_definition`<sup>Optional</sup> <a name="iam_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.iamActionDefinition"></a>

```python
iam_action_definition: BudgetsBudgetsActionDefinitionIamActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#iam_action_definition BudgetsBudgetsAction#iam_action_definition}.

---

##### `scp_action_definition`<sup>Optional</sup> <a name="scp_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.scpActionDefinition"></a>

```python
scp_action_definition: BudgetsBudgetsActionDefinitionScpActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#scp_action_definition BudgetsBudgetsAction#scp_action_definition}.

---

##### `ssm_action_definition`<sup>Optional</sup> <a name="ssm_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.ssmActionDefinition"></a>

```python
ssm_action_definition: BudgetsBudgetsActionDefinitionSsmActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#ssm_action_definition BudgetsBudgetsAction#ssm_action_definition}.

---

### BudgetsBudgetsActionDefinitionIamActionDefinition <a name="BudgetsBudgetsActionDefinitionIamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition(
  groups: typing.List[str] = None,
  policy_arn: str = None,
  roles: typing.List[str] = None,
  users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.groups">groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#groups BudgetsBudgetsAction#groups}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.policyArn">policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_arn BudgetsBudgetsAction#policy_arn}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.roles">roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#roles BudgetsBudgetsAction#roles}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.users">users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#users BudgetsBudgetsAction#users}. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#groups BudgetsBudgetsAction#groups}.

---

##### `policy_arn`<sup>Optional</sup> <a name="policy_arn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_arn BudgetsBudgetsAction#policy_arn}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#roles BudgetsBudgetsAction#roles}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#users BudgetsBudgetsAction#users}.

---

### BudgetsBudgetsActionDefinitionScpActionDefinition <a name="BudgetsBudgetsActionDefinitionScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition(
  policy_id: str = None,
  target_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_id BudgetsBudgetsAction#policy_id}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#target_ids BudgetsBudgetsAction#target_ids}. |

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_id BudgetsBudgetsAction#policy_id}.

---

##### `target_ids`<sup>Optional</sup> <a name="target_ids" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#target_ids BudgetsBudgetsAction#target_ids}.

---

### BudgetsBudgetsActionDefinitionSsmActionDefinition <a name="BudgetsBudgetsActionDefinitionSsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition(
  instance_ids: typing.List[str] = None,
  region: str = None,
  subtype: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.instanceIds">instance_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#instance_ids BudgetsBudgetsAction#instance_ids}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#region BudgetsBudgetsAction#region}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.subtype">subtype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subtype BudgetsBudgetsAction#subtype}. |

---

##### `instance_ids`<sup>Optional</sup> <a name="instance_ids" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.instanceIds"></a>

```python
instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#instance_ids BudgetsBudgetsAction#instance_ids}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#region BudgetsBudgetsAction#region}.

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subtype BudgetsBudgetsAction#subtype}.

---

### BudgetsBudgetsActionResourceTags <a name="BudgetsBudgetsActionResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionResourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#key BudgetsBudgetsAction#key}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#key BudgetsBudgetsAction#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}.

---

### BudgetsBudgetsActionSubscribers <a name="BudgetsBudgetsActionSubscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionSubscribers(
  address: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#address BudgetsBudgetsAction#address}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#address BudgetsBudgetsAction#address}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetsActionActionThresholdOutputReference <a name="BudgetsBudgetsActionActionThresholdOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetsBudgetsActionActionThreshold
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---


### BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetPolicyArn">reset_policy_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetUsers">reset_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_groups` <a name="reset_groups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_policy_arn` <a name="reset_policy_arn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetPolicyArn"></a>

```python
def reset_policy_arn() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetUsers"></a>

```python
def reset_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput">policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_arn_input`<sup>Optional</sup> <a name="policy_arn_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput"></a>

```python
policy_arn_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetsBudgetsActionDefinitionIamActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition">put_iam_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition">put_scp_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition">put_ssm_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetIamActionDefinition">reset_iam_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetScpActionDefinition">reset_scp_action_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetSsmActionDefinition">reset_ssm_action_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iam_action_definition` <a name="put_iam_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition"></a>

```python
def put_iam_action_definition(
  groups: typing.List[str] = None,
  policy_arn: str = None,
  roles: typing.List[str] = None,
  users: typing.List[str] = None
) -> None
```

###### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition.parameter.groups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#groups BudgetsBudgetsAction#groups}.

---

###### `policy_arn`<sup>Optional</sup> <a name="policy_arn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition.parameter.policyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_arn BudgetsBudgetsAction#policy_arn}.

---

###### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition.parameter.roles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#roles BudgetsBudgetsAction#roles}.

---

###### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition.parameter.users"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#users BudgetsBudgetsAction#users}.

---

##### `put_scp_action_definition` <a name="put_scp_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition"></a>

```python
def put_scp_action_definition(
  policy_id: str = None,
  target_ids: typing.List[str] = None
) -> None
```

###### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_id BudgetsBudgetsAction#policy_id}.

---

###### `target_ids`<sup>Optional</sup> <a name="target_ids" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition.parameter.targetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#target_ids BudgetsBudgetsAction#target_ids}.

---

##### `put_ssm_action_definition` <a name="put_ssm_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition"></a>

```python
def put_ssm_action_definition(
  instance_ids: typing.List[str] = None,
  region: str = None,
  subtype: str = None
) -> None
```

###### `instance_ids`<sup>Optional</sup> <a name="instance_ids" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition.parameter.instanceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#instance_ids BudgetsBudgetsAction#instance_ids}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#region BudgetsBudgetsAction#region}.

---

###### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition.parameter.subtype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subtype BudgetsBudgetsAction#subtype}.

---

##### `reset_iam_action_definition` <a name="reset_iam_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetIamActionDefinition"></a>

```python
def reset_iam_action_definition() -> None
```

##### `reset_scp_action_definition` <a name="reset_scp_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetScpActionDefinition"></a>

```python
def reset_scp_action_definition() -> None
```

##### `reset_ssm_action_definition` <a name="reset_ssm_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetSsmActionDefinition"></a>

```python
def reset_ssm_action_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition">iam_action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition">scp_action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition">ssm_action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinitionInput">iam_action_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinitionInput">scp_action_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinitionInput">ssm_action_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_action_definition`<sup>Required</sup> <a name="iam_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition"></a>

```python
iam_action_definition: BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a>

---

##### `scp_action_definition`<sup>Required</sup> <a name="scp_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition"></a>

```python
scp_action_definition: BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a>

---

##### `ssm_action_definition`<sup>Required</sup> <a name="ssm_action_definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition"></a>

```python
ssm_action_definition: BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a>

---

##### `iam_action_definition_input`<sup>Optional</sup> <a name="iam_action_definition_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinitionInput"></a>

```python
iam_action_definition_input: IResolvable | BudgetsBudgetsActionDefinitionIamActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---

##### `scp_action_definition_input`<sup>Optional</sup> <a name="scp_action_definition_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinitionInput"></a>

```python
scp_action_definition_input: IResolvable | BudgetsBudgetsActionDefinitionScpActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---

##### `ssm_action_definition_input`<sup>Optional</sup> <a name="ssm_action_definition_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinitionInput"></a>

```python
ssm_action_definition_input: IResolvable | BudgetsBudgetsActionDefinitionSsmActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetsBudgetsActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetTargetIds">reset_target_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_target_ids` <a name="reset_target_ids" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetTargetIds"></a>

```python
def reset_target_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput">target_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `target_ids_input`<sup>Optional</sup> <a name="target_ids_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput"></a>

```python
target_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetsBudgetsActionDefinitionScpActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetInstanceIds">reset_instance_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetSubtype">reset_subtype</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_ids` <a name="reset_instance_ids" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetInstanceIds"></a>

```python
def reset_instance_ids() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_subtype` <a name="reset_subtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetSubtype"></a>

```python
def reset_subtype() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput">instance_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtypeInput">subtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds">instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_ids_input`<sup>Optional</sup> <a name="instance_ids_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput"></a>

```python
instance_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subtype_input`<sup>Optional</sup> <a name="subtype_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtypeInput"></a>

```python
subtype_input: str
```

- *Type:* str

---

##### `instance_ids`<sup>Required</sup> <a name="instance_ids" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds"></a>

```python
instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetsBudgetsActionDefinitionSsmActionDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---


### BudgetsBudgetsActionResourceTagsList <a name="BudgetsBudgetsActionResourceTagsList" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BudgetsBudgetsActionResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BudgetsBudgetsActionResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>]

---


### BudgetsBudgetsActionResourceTagsOutputReference <a name="BudgetsBudgetsActionResourceTagsOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetsBudgetsActionResourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>

---


### BudgetsBudgetsActionSubscribersList <a name="BudgetsBudgetsActionSubscribersList" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BudgetsBudgetsActionSubscribersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BudgetsBudgetsActionSubscribers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>]

---


### BudgetsBudgetsActionSubscribersOutputReference <a name="BudgetsBudgetsActionSubscribersOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import budgets_budgets_action

budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BudgetsBudgetsActionSubscribers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>

---



