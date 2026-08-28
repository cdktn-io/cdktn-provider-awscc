# `computeoptimizerAutomationRule` Submodule <a name="`computeoptimizerAutomationRule` Submodule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerAutomationRule <a name="ComputeoptimizerAutomationRule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRule;

ComputeoptimizerAutomationRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .recommendedActionTypes(java.util.List<java.lang.String>)
    .ruleType(java.lang.String)
    .schedule(ComputeoptimizerAutomationRuleSchedule)
    .status(java.lang.String)
//  .criteria(ComputeoptimizerAutomationRuleCriteria)
//  .description(java.lang.String)
//  .organizationConfiguration(ComputeoptimizerAutomationRuleOrganizationConfiguration)
//  .priority(java.lang.String)
//  .tags(IResolvable|java.util.List<ComputeoptimizerAutomationRuleTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.recommendedActionTypes">recommendedActionTypes</a></code> | <code>java.util.List<java.lang.String></code> | The types of recommended actions this rule will implement. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.ruleType">ruleType</a></code> | <code>java.lang.String</code> | The type of automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | The schedule configuration for when the rule runs. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The status of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | Filter criteria that specify which recommended actions qualify for implementation. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.organizationConfiguration">organizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | Organization configuration for organization rules, including rule apply order and account scope. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.String</code> | Rule priority within its group. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>></code> | Tags associated with the automation rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#name ComputeoptimizerAutomationRule#name}

---

##### `recommendedActionTypes`<sup>Required</sup> <a name="recommendedActionTypes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.recommendedActionTypes"></a>

- *Type:* java.util.List<java.lang.String>

The types of recommended actions this rule will implement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#recommended_action_types ComputeoptimizerAutomationRule#recommended_action_types}

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.ruleType"></a>

- *Type:* java.lang.String

The type of automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#rule_type ComputeoptimizerAutomationRule#rule_type}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

The schedule configuration for when the rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#schedule ComputeoptimizerAutomationRule#schedule}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The status of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#status ComputeoptimizerAutomationRule#status}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

Filter criteria that specify which recommended actions qualify for implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#criteria ComputeoptimizerAutomationRule#criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#description ComputeoptimizerAutomationRule#description}

---

##### `organizationConfiguration`<sup>Optional</sup> <a name="organizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.organizationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

Organization configuration for organization rules, including rule apply order and account scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#organization_configuration ComputeoptimizerAutomationRule#organization_configuration}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.String

Rule priority within its group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#priority ComputeoptimizerAutomationRule#priority}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>>

Tags associated with the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#tags ComputeoptimizerAutomationRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration">putOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOrganizationConfiguration">resetOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria"></a>

```java
public void putCriteria(ComputeoptimizerAutomationRuleCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---

##### `putOrganizationConfiguration` <a name="putOrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration"></a>

```java
public void putOrganizationConfiguration(ComputeoptimizerAutomationRuleOrganizationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule"></a>

```java
public void putSchedule(ComputeoptimizerAutomationRuleSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ComputeoptimizerAutomationRuleTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>>

---

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetCriteria"></a>

```java
public void resetCriteria()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOrganizationConfiguration` <a name="resetOrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOrganizationConfiguration"></a>

```java
public void resetOrganizationConfiguration()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRule;

ComputeoptimizerAutomationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRule;

ComputeoptimizerAutomationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRule;

ComputeoptimizerAutomationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRule;

ComputeoptimizerAutomationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeoptimizerAutomationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeoptimizerAutomationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeoptimizerAutomationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerAutomationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference">ComputeoptimizerAutomationRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfiguration">organizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleRevision">ruleRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference">ComputeoptimizerAutomationRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList">ComputeoptimizerAutomationRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteriaInput">criteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfigurationInput">organizationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypesInput">recommendedActionTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleTypeInput">ruleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypes">recommendedActionTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteria"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaOutputReference getCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference">ComputeoptimizerAutomationRuleCriteriaOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lastUpdatedTimestamp"></a>

```java
public java.lang.String getLastUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `organizationConfiguration`<sup>Required</sup> <a name="organizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfiguration"></a>

```java
public ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference getOrganizationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a>

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `ruleRevision`<sup>Required</sup> <a name="ruleRevision" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleRevision"></a>

```java
public java.lang.String getRuleRevision();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.schedule"></a>

```java
public ComputeoptimizerAutomationRuleScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference">ComputeoptimizerAutomationRuleScheduleOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tags"></a>

```java
public ComputeoptimizerAutomationRuleTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList">ComputeoptimizerAutomationRuleTagsList</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteriaInput"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleCriteria getCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `organizationConfigurationInput`<sup>Optional</sup> <a name="organizationConfigurationInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfigurationInput"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleOrganizationConfiguration getOrganizationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `recommendedActionTypesInput`<sup>Optional</sup> <a name="recommendedActionTypesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypesInput"></a>

```java
public java.util.List<java.lang.String> getRecommendedActionTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleTypeInput"></a>

```java
public java.lang.String getRuleTypeInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.scheduleInput"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleSchedule getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `recommendedActionTypes`<sup>Required</sup> <a name="recommendedActionTypes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypes"></a>

```java
public java.util.List<java.lang.String> getRecommendedActionTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerAutomationRuleConfig <a name="ComputeoptimizerAutomationRuleConfig" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleConfig;

ComputeoptimizerAutomationRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .recommendedActionTypes(java.util.List<java.lang.String>)
    .ruleType(java.lang.String)
    .schedule(ComputeoptimizerAutomationRuleSchedule)
    .status(java.lang.String)
//  .criteria(ComputeoptimizerAutomationRuleCriteria)
//  .description(java.lang.String)
//  .organizationConfiguration(ComputeoptimizerAutomationRuleOrganizationConfiguration)
//  .priority(java.lang.String)
//  .tags(IResolvable|java.util.List<ComputeoptimizerAutomationRuleTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.recommendedActionTypes">recommendedActionTypes</a></code> | <code>java.util.List<java.lang.String></code> | The types of recommended actions this rule will implement. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | The type of automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | The schedule configuration for when the rule runs. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.status">status</a></code> | <code>java.lang.String</code> | The status of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | Filter criteria that specify which recommended actions qualify for implementation. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.organizationConfiguration">organizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | Organization configuration for organization rules, including rule apply order and account scope. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.priority">priority</a></code> | <code>java.lang.String</code> | Rule priority within its group. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>></code> | Tags associated with the automation rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#name ComputeoptimizerAutomationRule#name}

---

##### `recommendedActionTypes`<sup>Required</sup> <a name="recommendedActionTypes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.recommendedActionTypes"></a>

```java
public java.util.List<java.lang.String> getRecommendedActionTypes();
```

- *Type:* java.util.List<java.lang.String>

The types of recommended actions this rule will implement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#recommended_action_types ComputeoptimizerAutomationRule#recommended_action_types}

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

The type of automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#rule_type ComputeoptimizerAutomationRule#rule_type}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.schedule"></a>

```java
public ComputeoptimizerAutomationRuleSchedule getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

The schedule configuration for when the rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#schedule ComputeoptimizerAutomationRule#schedule}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#status ComputeoptimizerAutomationRule#status}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.criteria"></a>

```java
public ComputeoptimizerAutomationRuleCriteria getCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

Filter criteria that specify which recommended actions qualify for implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#criteria ComputeoptimizerAutomationRule#criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#description ComputeoptimizerAutomationRule#description}

---

##### `organizationConfiguration`<sup>Optional</sup> <a name="organizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.organizationConfiguration"></a>

```java
public ComputeoptimizerAutomationRuleOrganizationConfiguration getOrganizationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

Organization configuration for organization rules, including rule apply order and account scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#organization_configuration ComputeoptimizerAutomationRule#organization_configuration}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Rule priority within its group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#priority ComputeoptimizerAutomationRule#priority}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>>

Tags associated with the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#tags ComputeoptimizerAutomationRule#tags}

---

### ComputeoptimizerAutomationRuleCriteria <a name="ComputeoptimizerAutomationRuleCriteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteria;

ComputeoptimizerAutomationRuleCriteria.builder()
//  .ebsVolumeSizeInGib(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib>)
//  .ebsVolumeType(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEbsVolumeType>)
//  .estimatedMonthlySavings(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings>)
//  .lookBackPeriodInDays(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays>)
//  .region(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaRegion>)
//  .resourceArn(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaResourceArn>)
//  .resourceTag(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaResourceTag>)
//  .restartNeeded(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaRestartNeeded>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeSizeInGib">ebsVolumeSizeInGib</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib ComputeoptimizerAutomationRule#ebs_volume_size_in_gib}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeType">ebsVolumeType</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type ComputeoptimizerAutomationRule#ebs_volume_type}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.estimatedMonthlySavings">estimatedMonthlySavings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings ComputeoptimizerAutomationRule#estimated_monthly_savings}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.lookBackPeriodInDays">lookBackPeriodInDays</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days ComputeoptimizerAutomationRule#look_back_period_in_days}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.region">region</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#region ComputeoptimizerAutomationRule#region}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceArn">resourceArn</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#resource_arn ComputeoptimizerAutomationRule#resource_arn}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceTag">resourceTag</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#resource_tag ComputeoptimizerAutomationRule#resource_tag}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.restartNeeded">restartNeeded</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#restart_needed ComputeoptimizerAutomationRule#restart_needed}. |

---

##### `ebsVolumeSizeInGib`<sup>Optional</sup> <a name="ebsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeSizeInGib"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib> getEbsVolumeSizeInGib();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib ComputeoptimizerAutomationRule#ebs_volume_size_in_gib}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeType"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEbsVolumeType> getEbsVolumeType();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type ComputeoptimizerAutomationRule#ebs_volume_type}.

---

##### `estimatedMonthlySavings`<sup>Optional</sup> <a name="estimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.estimatedMonthlySavings"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings> getEstimatedMonthlySavings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings ComputeoptimizerAutomationRule#estimated_monthly_savings}.

---

##### `lookBackPeriodInDays`<sup>Optional</sup> <a name="lookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.lookBackPeriodInDays"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays> getLookBackPeriodInDays();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days ComputeoptimizerAutomationRule#look_back_period_in_days}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.region"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaRegion> getRegion();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#region ComputeoptimizerAutomationRule#region}.

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceArn"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaResourceArn> getResourceArn();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#resource_arn ComputeoptimizerAutomationRule#resource_arn}.

---

##### `resourceTag`<sup>Optional</sup> <a name="resourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceTag"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaResourceTag> getResourceTag();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#resource_tag ComputeoptimizerAutomationRule#resource_tag}.

---

##### `restartNeeded`<sup>Optional</sup> <a name="restartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.restartNeeded"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaRestartNeeded> getRestartNeeded();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#restart_needed ComputeoptimizerAutomationRule#restart_needed}.

---

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib;

ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.builder()
//  .comparison(java.lang.String)
//  .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.comparison">comparison</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeType <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType;

ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.builder()
//  .comparison(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.comparison">comparison</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings;

ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.builder()
//  .comparison(java.lang.String)
//  .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.comparison">comparison</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays;

ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.builder()
//  .comparison(java.lang.String)
//  .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.comparison">comparison</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaRegion <a name="ComputeoptimizerAutomationRuleCriteriaRegion" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaRegion;

ComputeoptimizerAutomationRuleCriteriaRegion.builder()
//  .comparison(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.comparison">comparison</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaResourceArn <a name="ComputeoptimizerAutomationRuleCriteriaResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaResourceArn;

ComputeoptimizerAutomationRuleCriteriaResourceArn.builder()
//  .comparison(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.comparison">comparison</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaResourceTag <a name="ComputeoptimizerAutomationRuleCriteriaResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaResourceTag;

ComputeoptimizerAutomationRuleCriteriaResourceTag.builder()
//  .comparison(java.lang.String)
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.comparison">comparison</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaRestartNeeded <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded;

ComputeoptimizerAutomationRuleCriteriaRestartNeeded.builder()
//  .comparison(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.comparison">comparison</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleOrganizationConfiguration <a name="ComputeoptimizerAutomationRuleOrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleOrganizationConfiguration;

ComputeoptimizerAutomationRuleOrganizationConfiguration.builder()
//  .accountIds(java.util.List<java.lang.String>)
//  .ruleApplyOrder(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | List of account IDs where the organization rule applies. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.ruleApplyOrder">ruleApplyOrder</a></code> | <code>java.lang.String</code> | When the rule should be applied relative to account rules. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

List of account IDs where the organization rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#account_ids ComputeoptimizerAutomationRule#account_ids}

---

##### `ruleApplyOrder`<sup>Optional</sup> <a name="ruleApplyOrder" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.ruleApplyOrder"></a>

```java
public java.lang.String getRuleApplyOrder();
```

- *Type:* java.lang.String

When the rule should be applied relative to account rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#rule_apply_order ComputeoptimizerAutomationRule#rule_apply_order}

---

### ComputeoptimizerAutomationRuleSchedule <a name="ComputeoptimizerAutomationRuleSchedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleSchedule;

ComputeoptimizerAutomationRuleSchedule.builder()
//  .executionWindowInMinutes(java.lang.Number)
//  .scheduleExpression(java.lang.String)
//  .scheduleExpressionTimezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.executionWindowInMinutes">executionWindowInMinutes</a></code> | <code>java.lang.Number</code> | Execution window duration in minutes. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | Schedule expression (e.g., cron or rate expression). |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>java.lang.String</code> | IANA timezone identifier. |

---

##### `executionWindowInMinutes`<sup>Optional</sup> <a name="executionWindowInMinutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.executionWindowInMinutes"></a>

```java
public java.lang.Number getExecutionWindowInMinutes();
```

- *Type:* java.lang.Number

Execution window duration in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#execution_window_in_minutes ComputeoptimizerAutomationRule#execution_window_in_minutes}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

Schedule expression (e.g., cron or rate expression).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#schedule_expression ComputeoptimizerAutomationRule#schedule_expression}

---

##### `scheduleExpressionTimezone`<sup>Optional</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpressionTimezone"></a>

```java
public java.lang.String getScheduleExpressionTimezone();
```

- *Type:* java.lang.String

IANA timezone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#schedule_expression_timezone ComputeoptimizerAutomationRule#schedule_expression_timezone}

---

### ComputeoptimizerAutomationRuleTags <a name="ComputeoptimizerAutomationRuleTags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleTags;

ComputeoptimizerAutomationRuleTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#value ComputeoptimizerAutomationRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#value ComputeoptimizerAutomationRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList;

new ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>>

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference;

new ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList;

new ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEbsVolumeType> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>>

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference;

new ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeType getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>

---


### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList;

new ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>>

---


### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference;

new ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>

---


### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList;

new ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>>

---


### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference;

new ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>

---


### ComputeoptimizerAutomationRuleCriteriaOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaOutputReference;

new ComputeoptimizerAutomationRuleCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib">putEbsVolumeSizeInGib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType">putEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings">putEstimatedMonthlySavings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays">putLookBackPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion">putRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn">putResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag">putResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded">putRestartNeeded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeSizeInGib">resetEbsVolumeSizeInGib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEstimatedMonthlySavings">resetEstimatedMonthlySavings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetLookBackPeriodInDays">resetLookBackPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceTag">resetResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRestartNeeded">resetRestartNeeded</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsVolumeSizeInGib` <a name="putEbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib"></a>

```java
public void putEbsVolumeSizeInGib(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>>

---

##### `putEbsVolumeType` <a name="putEbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType"></a>

```java
public void putEbsVolumeType(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEbsVolumeType> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>>

---

##### `putEstimatedMonthlySavings` <a name="putEstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings"></a>

```java
public void putEstimatedMonthlySavings(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>>

---

##### `putLookBackPeriodInDays` <a name="putLookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays"></a>

```java
public void putLookBackPeriodInDays(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>>

---

##### `putRegion` <a name="putRegion" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion"></a>

```java
public void putRegion(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaRegion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>>

---

##### `putResourceArn` <a name="putResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn"></a>

```java
public void putResourceArn(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaResourceArn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>>

---

##### `putResourceTag` <a name="putResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag"></a>

```java
public void putResourceTag(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaResourceTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>>

---

##### `putRestartNeeded` <a name="putRestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded"></a>

```java
public void putRestartNeeded(IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaRestartNeeded> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>>

---

##### `resetEbsVolumeSizeInGib` <a name="resetEbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeSizeInGib"></a>

```java
public void resetEbsVolumeSizeInGib()
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeType"></a>

```java
public void resetEbsVolumeType()
```

##### `resetEstimatedMonthlySavings` <a name="resetEstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEstimatedMonthlySavings"></a>

```java
public void resetEstimatedMonthlySavings()
```

##### `resetLookBackPeriodInDays` <a name="resetLookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetLookBackPeriodInDays"></a>

```java
public void resetLookBackPeriodInDays()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceArn"></a>

```java
public void resetResourceArn()
```

##### `resetResourceTag` <a name="resetResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceTag"></a>

```java
public void resetResourceTag()
```

##### `resetRestartNeeded` <a name="resetRestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRestartNeeded"></a>

```java
public void resetRestartNeeded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib">ebsVolumeSizeInGib</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings">estimatedMonthlySavings</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays">lookBackPeriodInDays</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.region">region</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList">ComputeoptimizerAutomationRuleCriteriaRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn">resourceArn</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList">ComputeoptimizerAutomationRuleCriteriaResourceArnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag">resourceTag</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList">ComputeoptimizerAutomationRuleCriteriaResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded">restartNeeded</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList">ComputeoptimizerAutomationRuleCriteriaRestartNeededList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGibInput">ebsVolumeSizeInGibInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavingsInput">estimatedMonthlySavingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDaysInput">lookBackPeriodInDaysInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.regionInput">regionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTagInput">resourceTagInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeededInput">restartNeededInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsVolumeSizeInGib`<sup>Required</sup> <a name="ebsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList getEbsVolumeSizeInGib();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a>

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList getEbsVolumeType();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a>

---

##### `estimatedMonthlySavings`<sup>Required</sup> <a name="estimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList getEstimatedMonthlySavings();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a>

---

##### `lookBackPeriodInDays`<sup>Required</sup> <a name="lookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList getLookBackPeriodInDays();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.region"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaRegionList getRegion();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList">ComputeoptimizerAutomationRuleCriteriaRegionList</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaResourceArnList getResourceArn();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList">ComputeoptimizerAutomationRuleCriteriaResourceArnList</a>

---

##### `resourceTag`<sup>Required</sup> <a name="resourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaResourceTagList getResourceTag();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList">ComputeoptimizerAutomationRuleCriteriaResourceTagList</a>

---

##### `restartNeeded`<sup>Required</sup> <a name="restartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaRestartNeededList getRestartNeeded();
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList">ComputeoptimizerAutomationRuleCriteriaRestartNeededList</a>

---

##### `ebsVolumeSizeInGibInput`<sup>Optional</sup> <a name="ebsVolumeSizeInGibInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGibInput"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib> getEbsVolumeSizeInGibInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>>

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeTypeInput"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEbsVolumeType> getEbsVolumeTypeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>>

---

##### `estimatedMonthlySavingsInput`<sup>Optional</sup> <a name="estimatedMonthlySavingsInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavingsInput"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings> getEstimatedMonthlySavingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>>

---

##### `lookBackPeriodInDaysInput`<sup>Optional</sup> <a name="lookBackPeriodInDaysInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDaysInput"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays> getLookBackPeriodInDaysInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.regionInput"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaRegion> getRegionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>>

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArnInput"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaResourceArn> getResourceArnInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>>

---

##### `resourceTagInput`<sup>Optional</sup> <a name="resourceTagInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTagInput"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaResourceTag> getResourceTagInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>>

---

##### `restartNeededInput`<sup>Optional</sup> <a name="restartNeededInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeededInput"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaRestartNeeded> getRestartNeededInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---


### ComputeoptimizerAutomationRuleCriteriaRegionList <a name="ComputeoptimizerAutomationRuleCriteriaRegionList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaRegionList;

new ComputeoptimizerAutomationRuleCriteriaRegionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaRegionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaRegion> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>>

---


### ComputeoptimizerAutomationRuleCriteriaRegionOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaRegionOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference;

new ComputeoptimizerAutomationRuleCriteriaRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleCriteriaRegion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>

---


### ComputeoptimizerAutomationRuleCriteriaResourceArnList <a name="ComputeoptimizerAutomationRuleCriteriaResourceArnList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaResourceArnList;

new ComputeoptimizerAutomationRuleCriteriaResourceArnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaResourceArn> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>>

---


### ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference;

new ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceArn getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>

---


### ComputeoptimizerAutomationRuleCriteriaResourceTagList <a name="ComputeoptimizerAutomationRuleCriteriaResourceTagList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaResourceTagList;

new ComputeoptimizerAutomationRuleCriteriaResourceTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaResourceTag> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>>

---


### ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference;

new ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceTag getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>

---


### ComputeoptimizerAutomationRuleCriteriaRestartNeededList <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeededList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList;

new ComputeoptimizerAutomationRuleCriteriaRestartNeededList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get"></a>

```java
public ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleCriteriaRestartNeeded> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>>

---


### ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference;

new ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleCriteriaRestartNeeded getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>

---


### ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference <a name="ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference;

new ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetRuleApplyOrder">resetRuleApplyOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetAccountIds"></a>

```java
public void resetAccountIds()
```

##### `resetRuleApplyOrder` <a name="resetRuleApplyOrder" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetRuleApplyOrder"></a>

```java
public void resetRuleApplyOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrderInput">ruleApplyOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder">ruleApplyOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIdsInput"></a>

```java
public java.util.List<java.lang.String> getAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleApplyOrderInput`<sup>Optional</sup> <a name="ruleApplyOrderInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrderInput"></a>

```java
public java.lang.String getRuleApplyOrderInput();
```

- *Type:* java.lang.String

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleApplyOrder`<sup>Required</sup> <a name="ruleApplyOrder" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder"></a>

```java
public java.lang.String getRuleApplyOrder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleOrganizationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---


### ComputeoptimizerAutomationRuleScheduleOutputReference <a name="ComputeoptimizerAutomationRuleScheduleOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleScheduleOutputReference;

new ComputeoptimizerAutomationRuleScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetExecutionWindowInMinutes">resetExecutionWindowInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpressionTimezone">resetScheduleExpressionTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionWindowInMinutes` <a name="resetExecutionWindowInMinutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetExecutionWindowInMinutes"></a>

```java
public void resetExecutionWindowInMinutes()
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpression"></a>

```java
public void resetScheduleExpression()
```

##### `resetScheduleExpressionTimezone` <a name="resetScheduleExpressionTimezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpressionTimezone"></a>

```java
public void resetScheduleExpressionTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutesInput">executionWindowInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezoneInput">scheduleExpressionTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes">executionWindowInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionWindowInMinutesInput`<sup>Optional</sup> <a name="executionWindowInMinutesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutesInput"></a>

```java
public java.lang.Number getExecutionWindowInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="scheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezoneInput"></a>

```java
public java.lang.String getScheduleExpressionTimezoneInput();
```

- *Type:* java.lang.String

---

##### `executionWindowInMinutes`<sup>Required</sup> <a name="executionWindowInMinutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes"></a>

```java
public java.lang.Number getExecutionWindowInMinutes();
```

- *Type:* java.lang.Number

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionTimezone`<sup>Required</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone"></a>

```java
public java.lang.String getScheduleExpressionTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---


### ComputeoptimizerAutomationRuleTagsList <a name="ComputeoptimizerAutomationRuleTagsList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleTagsList;

new ComputeoptimizerAutomationRuleTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get"></a>

```java
public ComputeoptimizerAutomationRuleTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeoptimizerAutomationRuleTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>>

---


### ComputeoptimizerAutomationRuleTagsOutputReference <a name="ComputeoptimizerAutomationRuleTagsOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.computeoptimizer_automation_rule.ComputeoptimizerAutomationRuleTagsOutputReference;

new ComputeoptimizerAutomationRuleTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeoptimizerAutomationRuleTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>

---



