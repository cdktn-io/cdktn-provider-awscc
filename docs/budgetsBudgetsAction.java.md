# `budgetsBudgetsAction` Submodule <a name="`budgetsBudgetsAction` Submodule" id="@cdktn/provider-awscc.budgetsBudgetsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudgetsAction <a name="BudgetsBudgetsAction" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action awscc_budgets_budgets_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsAction;

BudgetsBudgetsAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actionThreshold(BudgetsBudgetsActionActionThreshold)
    .actionType(java.lang.String)
    .budgetName(java.lang.String)
    .definition(BudgetsBudgetsActionDefinition)
    .executionRoleArn(java.lang.String)
    .notificationType(java.lang.String)
    .subscribers(IResolvable|java.util.List<BudgetsBudgetsActionSubscribers>)
//  .approvalModel(java.lang.String)
//  .resourceTags(IResolvable|java.util.List<BudgetsBudgetsActionResourceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.actionThreshold">actionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.budgetName">budgetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.notificationType">notificationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.subscribers">subscribers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.approvalModel">approvalModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.resourceTags">resourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionThreshold`<sup>Required</sup> <a name="actionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.actionThreshold"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}.

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.actionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}.

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.budgetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.definition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}.

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.notificationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}.

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.subscribers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}.

---

##### `approvalModel`<sup>Optional</sup> <a name="approvalModel" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.approvalModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}.

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.resourceTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold">putActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers">putSubscribers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetApprovalModel">resetApprovalModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetResourceTags">resetResourceTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionThreshold` <a name="putActionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold"></a>

```java
public void putActionThreshold(BudgetsBudgetsActionActionThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---

##### `putDefinition` <a name="putDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition"></a>

```java
public void putDefinition(BudgetsBudgetsActionDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---

##### `putResourceTags` <a name="putResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags"></a>

```java
public void putResourceTags(IResolvable|java.util.List<BudgetsBudgetsActionResourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>>

---

##### `putSubscribers` <a name="putSubscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers"></a>

```java
public void putSubscribers(IResolvable|java.util.List<BudgetsBudgetsActionSubscribers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>>

---

##### `resetApprovalModel` <a name="resetApprovalModel" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetApprovalModel"></a>

```java
public void resetApprovalModel()
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetResourceTags"></a>

```java
public void resetResourceTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BudgetsBudgetsAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsAction;

BudgetsBudgetsAction.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsAction;

BudgetsBudgetsAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsAction;

BudgetsBudgetsAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsAction;

BudgetsBudgetsAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BudgetsBudgetsAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BudgetsBudgetsAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BudgetsBudgetsAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BudgetsBudgetsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BudgetsBudgetsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionId">actionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThreshold">actionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference">BudgetsBudgetsActionActionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList">BudgetsBudgetsActionResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribers">subscribers</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList">BudgetsBudgetsActionSubscribersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThresholdInput">actionThresholdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModelInput">approvalModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetNameInput">budgetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definitionInput">definitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationTypeInput">notificationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTagsInput">resourceTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribersInput">subscribersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModel">approvalModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetName">budgetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

---

##### `actionThreshold`<sup>Required</sup> <a name="actionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThreshold"></a>

```java
public BudgetsBudgetsActionActionThresholdOutputReference getActionThreshold();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference">BudgetsBudgetsActionActionThresholdOutputReference</a>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definition"></a>

```java
public BudgetsBudgetsActionDefinitionOutputReference getDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTags"></a>

```java
public BudgetsBudgetsActionResourceTagsList getResourceTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList">BudgetsBudgetsActionResourceTagsList</a>

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribers"></a>

```java
public BudgetsBudgetsActionSubscribersList getSubscribers();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList">BudgetsBudgetsActionSubscribersList</a>

---

##### `actionThresholdInput`<sup>Optional</sup> <a name="actionThresholdInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThresholdInput"></a>

```java
public IResolvable|BudgetsBudgetsActionActionThreshold getActionThresholdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `approvalModelInput`<sup>Optional</sup> <a name="approvalModelInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModelInput"></a>

```java
public java.lang.String getApprovalModelInput();
```

- *Type:* java.lang.String

---

##### `budgetNameInput`<sup>Optional</sup> <a name="budgetNameInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetNameInput"></a>

```java
public java.lang.String getBudgetNameInput();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definitionInput"></a>

```java
public IResolvable|BudgetsBudgetsActionDefinition getDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationTypeInput"></a>

```java
public java.lang.String getNotificationTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTagsInput"></a>

```java
public IResolvable|java.util.List<BudgetsBudgetsActionResourceTags> getResourceTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>>

---

##### `subscribersInput`<sup>Optional</sup> <a name="subscribersInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribersInput"></a>

```java
public IResolvable|java.util.List<BudgetsBudgetsActionSubscribers> getSubscribersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `approvalModel`<sup>Required</sup> <a name="approvalModel" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModel"></a>

```java
public java.lang.String getApprovalModel();
```

- *Type:* java.lang.String

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetName"></a>

```java
public java.lang.String getBudgetName();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetsActionActionThreshold <a name="BudgetsBudgetsActionActionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionActionThreshold;

BudgetsBudgetsActionActionThreshold.builder()
    .type(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}.

---

### BudgetsBudgetsActionConfig <a name="BudgetsBudgetsActionConfig" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionConfig;

BudgetsBudgetsActionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actionThreshold(BudgetsBudgetsActionActionThreshold)
    .actionType(java.lang.String)
    .budgetName(java.lang.String)
    .definition(BudgetsBudgetsActionDefinition)
    .executionRoleArn(java.lang.String)
    .notificationType(java.lang.String)
    .subscribers(IResolvable|java.util.List<BudgetsBudgetsActionSubscribers>)
//  .approvalModel(java.lang.String)
//  .resourceTags(IResolvable|java.util.List<BudgetsBudgetsActionResourceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionThreshold">actionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.budgetName">budgetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.subscribers">subscribers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.approvalModel">approvalModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.resourceTags">resourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionThreshold`<sup>Required</sup> <a name="actionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionThreshold"></a>

```java
public BudgetsBudgetsActionActionThreshold getActionThreshold();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}.

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}.

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.budgetName"></a>

```java
public java.lang.String getBudgetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.definition"></a>

```java
public BudgetsBudgetsActionDefinition getDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}.

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}.

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.subscribers"></a>

```java
public IResolvable|java.util.List<BudgetsBudgetsActionSubscribers> getSubscribers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}.

---

##### `approvalModel`<sup>Optional</sup> <a name="approvalModel" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.approvalModel"></a>

```java
public java.lang.String getApprovalModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}.

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.resourceTags"></a>

```java
public IResolvable|java.util.List<BudgetsBudgetsActionResourceTags> getResourceTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}.

---

### BudgetsBudgetsActionDefinition <a name="BudgetsBudgetsActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionDefinition;

BudgetsBudgetsActionDefinition.builder()
//  .iamActionDefinition(BudgetsBudgetsActionDefinitionIamActionDefinition)
//  .scpActionDefinition(BudgetsBudgetsActionDefinitionScpActionDefinition)
//  .ssmActionDefinition(BudgetsBudgetsActionDefinitionSsmActionDefinition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.iamActionDefinition">iamActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#iam_action_definition BudgetsBudgetsAction#iam_action_definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.scpActionDefinition">scpActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#scp_action_definition BudgetsBudgetsAction#scp_action_definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.ssmActionDefinition">ssmActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#ssm_action_definition BudgetsBudgetsAction#ssm_action_definition}. |

---

##### `iamActionDefinition`<sup>Optional</sup> <a name="iamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.iamActionDefinition"></a>

```java
public BudgetsBudgetsActionDefinitionIamActionDefinition getIamActionDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#iam_action_definition BudgetsBudgetsAction#iam_action_definition}.

---

##### `scpActionDefinition`<sup>Optional</sup> <a name="scpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.scpActionDefinition"></a>

```java
public BudgetsBudgetsActionDefinitionScpActionDefinition getScpActionDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#scp_action_definition BudgetsBudgetsAction#scp_action_definition}.

---

##### `ssmActionDefinition`<sup>Optional</sup> <a name="ssmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.ssmActionDefinition"></a>

```java
public BudgetsBudgetsActionDefinitionSsmActionDefinition getSsmActionDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#ssm_action_definition BudgetsBudgetsAction#ssm_action_definition}.

---

### BudgetsBudgetsActionDefinitionIamActionDefinition <a name="BudgetsBudgetsActionDefinitionIamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionDefinitionIamActionDefinition;

BudgetsBudgetsActionDefinitionIamActionDefinition.builder()
//  .groups(java.util.List<java.lang.String>)
//  .policyArn(java.lang.String)
//  .roles(java.util.List<java.lang.String>)
//  .users(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#groups BudgetsBudgetsAction#groups}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_arn BudgetsBudgetsAction#policy_arn}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#roles BudgetsBudgetsAction#roles}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#users BudgetsBudgetsAction#users}. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#groups BudgetsBudgetsAction#groups}.

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_arn BudgetsBudgetsAction#policy_arn}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#roles BudgetsBudgetsAction#roles}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#users BudgetsBudgetsAction#users}.

---

### BudgetsBudgetsActionDefinitionScpActionDefinition <a name="BudgetsBudgetsActionDefinitionScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionDefinitionScpActionDefinition;

BudgetsBudgetsActionDefinitionScpActionDefinition.builder()
//  .policyId(java.lang.String)
//  .targetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_id BudgetsBudgetsAction#policy_id}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.targetIds">targetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#target_ids BudgetsBudgetsAction#target_ids}. |

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_id BudgetsBudgetsAction#policy_id}.

---

##### `targetIds`<sup>Optional</sup> <a name="targetIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.targetIds"></a>

```java
public java.util.List<java.lang.String> getTargetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#target_ids BudgetsBudgetsAction#target_ids}.

---

### BudgetsBudgetsActionDefinitionSsmActionDefinition <a name="BudgetsBudgetsActionDefinitionSsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionDefinitionSsmActionDefinition;

BudgetsBudgetsActionDefinitionSsmActionDefinition.builder()
//  .instanceIds(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .subtype(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.instanceIds">instanceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#instance_ids BudgetsBudgetsAction#instance_ids}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#region BudgetsBudgetsAction#region}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.subtype">subtype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subtype BudgetsBudgetsAction#subtype}. |

---

##### `instanceIds`<sup>Optional</sup> <a name="instanceIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.instanceIds"></a>

```java
public java.util.List<java.lang.String> getInstanceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#instance_ids BudgetsBudgetsAction#instance_ids}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#region BudgetsBudgetsAction#region}.

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subtype BudgetsBudgetsAction#subtype}.

---

### BudgetsBudgetsActionResourceTags <a name="BudgetsBudgetsActionResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionResourceTags;

BudgetsBudgetsActionResourceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#key BudgetsBudgetsAction#key}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#key BudgetsBudgetsAction#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}.

---

### BudgetsBudgetsActionSubscribers <a name="BudgetsBudgetsActionSubscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionSubscribers;

BudgetsBudgetsActionSubscribers.builder()
    .address(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#address BudgetsBudgetsAction#address}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#address BudgetsBudgetsAction#address}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetsActionActionThresholdOutputReference <a name="BudgetsBudgetsActionActionThresholdOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionActionThresholdOutputReference;

new BudgetsBudgetsActionActionThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.internalValue"></a>

```java
public IResolvable|BudgetsBudgetsActionActionThreshold getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---


### BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference;

new BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetPolicyArn">resetPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroups` <a name="resetGroups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetPolicyArn` <a name="resetPolicyArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetPolicyArn"></a>

```java
public void resetPolicyArn()
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetRoles"></a>

```java
public void resetRoles()
```

##### `resetUsers` <a name="resetUsers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetUsers"></a>

```java
public void resetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput">policyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.usersInput">usersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput"></a>

```java
public java.lang.String getPolicyArnInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.usersInput"></a>

```java
public java.util.List<java.lang.String> getUsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|BudgetsBudgetsActionDefinitionIamActionDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionDefinitionOutputReference;

new BudgetsBudgetsActionDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition">putIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition">putScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition">putSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetIamActionDefinition">resetIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetScpActionDefinition">resetScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetSsmActionDefinition">resetSsmActionDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIamActionDefinition` <a name="putIamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition"></a>

```java
public void putIamActionDefinition(BudgetsBudgetsActionDefinitionIamActionDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---

##### `putScpActionDefinition` <a name="putScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition"></a>

```java
public void putScpActionDefinition(BudgetsBudgetsActionDefinitionScpActionDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---

##### `putSsmActionDefinition` <a name="putSsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition"></a>

```java
public void putSsmActionDefinition(BudgetsBudgetsActionDefinitionSsmActionDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---

##### `resetIamActionDefinition` <a name="resetIamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetIamActionDefinition"></a>

```java
public void resetIamActionDefinition()
```

##### `resetScpActionDefinition` <a name="resetScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetScpActionDefinition"></a>

```java
public void resetScpActionDefinition()
```

##### `resetSsmActionDefinition` <a name="resetSsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetSsmActionDefinition"></a>

```java
public void resetSsmActionDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition">iamActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition">scpActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition">ssmActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinitionInput">iamActionDefinitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinitionInput">scpActionDefinitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinitionInput">ssmActionDefinitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamActionDefinition`<sup>Required</sup> <a name="iamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition"></a>

```java
public BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference getIamActionDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a>

---

##### `scpActionDefinition`<sup>Required</sup> <a name="scpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition"></a>

```java
public BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference getScpActionDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a>

---

##### `ssmActionDefinition`<sup>Required</sup> <a name="ssmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition"></a>

```java
public BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference getSsmActionDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a>

---

##### `iamActionDefinitionInput`<sup>Optional</sup> <a name="iamActionDefinitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinitionInput"></a>

```java
public IResolvable|BudgetsBudgetsActionDefinitionIamActionDefinition getIamActionDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---

##### `scpActionDefinitionInput`<sup>Optional</sup> <a name="scpActionDefinitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinitionInput"></a>

```java
public IResolvable|BudgetsBudgetsActionDefinitionScpActionDefinition getScpActionDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---

##### `ssmActionDefinitionInput`<sup>Optional</sup> <a name="ssmActionDefinitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinitionInput"></a>

```java
public IResolvable|BudgetsBudgetsActionDefinitionSsmActionDefinition getSsmActionDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|BudgetsBudgetsActionDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference;

new BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetTargetIds">resetTargetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetTargetIds` <a name="resetTargetIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetTargetIds"></a>

```java
public void resetTargetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput">targetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds">targetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `targetIdsInput`<sup>Optional</sup> <a name="targetIdsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput"></a>

```java
public java.util.List<java.lang.String> getTargetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds"></a>

```java
public java.util.List<java.lang.String> getTargetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|BudgetsBudgetsActionDefinitionScpActionDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference;

new BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetInstanceIds">resetInstanceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceIds` <a name="resetInstanceIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetInstanceIds"></a>

```java
public void resetInstanceIds()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetSubtype"></a>

```java
public void resetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput">instanceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds">instanceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype">subtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceIdsInput`<sup>Optional</sup> <a name="instanceIdsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput"></a>

```java
public java.util.List<java.lang.String> getInstanceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtypeInput"></a>

```java
public java.lang.String getSubtypeInput();
```

- *Type:* java.lang.String

---

##### `instanceIds`<sup>Required</sup> <a name="instanceIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds"></a>

```java
public java.util.List<java.lang.String> getInstanceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|BudgetsBudgetsActionDefinitionSsmActionDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---


### BudgetsBudgetsActionResourceTagsList <a name="BudgetsBudgetsActionResourceTagsList" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionResourceTagsList;

new BudgetsBudgetsActionResourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get"></a>

```java
public BudgetsBudgetsActionResourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BudgetsBudgetsActionResourceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>>

---


### BudgetsBudgetsActionResourceTagsOutputReference <a name="BudgetsBudgetsActionResourceTagsOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionResourceTagsOutputReference;

new BudgetsBudgetsActionResourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BudgetsBudgetsActionResourceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>

---


### BudgetsBudgetsActionSubscribersList <a name="BudgetsBudgetsActionSubscribersList" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionSubscribersList;

new BudgetsBudgetsActionSubscribersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get"></a>

```java
public BudgetsBudgetsActionSubscribersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BudgetsBudgetsActionSubscribers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>>

---


### BudgetsBudgetsActionSubscribersOutputReference <a name="BudgetsBudgetsActionSubscribersOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.budgets_budgets_action.BudgetsBudgetsActionSubscribersOutputReference;

new BudgetsBudgetsActionSubscribersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.internalValue"></a>

```java
public IResolvable|BudgetsBudgetsActionSubscribers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>

---



