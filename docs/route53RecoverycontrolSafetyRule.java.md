# `route53RecoverycontrolSafetyRule` Submodule <a name="`route53RecoverycontrolSafetyRule` Submodule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolSafetyRule <a name="Route53RecoverycontrolSafetyRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRule;

Route53RecoverycontrolSafetyRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .assertionRule(Route53RecoverycontrolSafetyRuleAssertionRule)
//  .controlPanelArn(java.lang.String)
//  .gatingRule(Route53RecoverycontrolSafetyRuleGatingRule)
//  .name(java.lang.String)
//  .ruleConfig(Route53RecoverycontrolSafetyRuleRuleConfig)
//  .tags(IResolvable|java.util.List<Route53RecoverycontrolSafetyRuleTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.assertionRule">assertionRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.controlPanelArn">controlPanelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the control panel. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.gatingRule">gatingRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for the safety rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | The rule configuration for an assertion rule or gating rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>></code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assertionRule`<sup>Optional</sup> <a name="assertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.assertionRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met.

Otherwise, the change to the routing control is not accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#assertion_rule Route53RecoverycontrolSafetyRule#assertion_rule}

---

##### `controlPanelArn`<sup>Optional</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.controlPanelArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the control panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#control_panel_arn Route53RecoverycontrolSafetyRule#control_panel_arn}

---

##### `gatingRule`<sup>Optional</sup> <a name="gatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.gatingRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify.

If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#gating_rule Route53RecoverycontrolSafetyRule#gating_rule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for the safety rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#name Route53RecoverycontrolSafetyRule#name}

---

##### `ruleConfig`<sup>Optional</sup> <a name="ruleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.ruleConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

The rule configuration for an assertion rule or gating rule.

This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#rule_config Route53RecoverycontrolSafetyRule#rule_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#tags Route53RecoverycontrolSafetyRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule">putAssertionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule">putGatingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig">putRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetAssertionRule">resetAssertionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetControlPanelArn">resetControlPanelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetGatingRule">resetGatingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetRuleConfig">resetRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssertionRule` <a name="putAssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule"></a>

```java
public void putAssertionRule(Route53RecoverycontrolSafetyRuleAssertionRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---

##### `putGatingRule` <a name="putGatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule"></a>

```java
public void putGatingRule(Route53RecoverycontrolSafetyRuleGatingRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---

##### `putRuleConfig` <a name="putRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig"></a>

```java
public void putRuleConfig(Route53RecoverycontrolSafetyRuleRuleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Route53RecoverycontrolSafetyRuleTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>>

---

##### `resetAssertionRule` <a name="resetAssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetAssertionRule"></a>

```java
public void resetAssertionRule()
```

##### `resetControlPanelArn` <a name="resetControlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetControlPanelArn"></a>

```java
public void resetControlPanelArn()
```

##### `resetGatingRule` <a name="resetGatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetGatingRule"></a>

```java
public void resetGatingRule()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetName"></a>

```java
public void resetName()
```

##### `resetRuleConfig` <a name="resetRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetRuleConfig"></a>

```java
public void resetRuleConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRule;

Route53RecoverycontrolSafetyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRule;

Route53RecoverycontrolSafetyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRule;

Route53RecoverycontrolSafetyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRule;

Route53RecoverycontrolSafetyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53RecoverycontrolSafetyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53RecoverycontrolSafetyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53RecoverycontrolSafetyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoverycontrolSafetyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRule">assertionRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference">Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRule">gatingRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference">Route53RecoverycontrolSafetyRuleGatingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolSafetyRuleRuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.safetyRuleArn">safetyRuleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList">Route53RecoverycontrolSafetyRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRuleInput">assertionRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArnInput">controlPanelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRuleInput">gatingRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfigInput">ruleConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArn">controlPanelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assertionRule`<sup>Required</sup> <a name="assertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRule"></a>

```java
public Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference getAssertionRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference">Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a>

---

##### `gatingRule`<sup>Required</sup> <a name="gatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRule"></a>

```java
public Route53RecoverycontrolSafetyRuleGatingRuleOutputReference getGatingRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference">Route53RecoverycontrolSafetyRuleGatingRuleOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ruleConfig`<sup>Required</sup> <a name="ruleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfig"></a>

```java
public Route53RecoverycontrolSafetyRuleRuleConfigOutputReference getRuleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolSafetyRuleRuleConfigOutputReference</a>

---

##### `safetyRuleArn`<sup>Required</sup> <a name="safetyRuleArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.safetyRuleArn"></a>

```java
public java.lang.String getSafetyRuleArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tags"></a>

```java
public Route53RecoverycontrolSafetyRuleTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList">Route53RecoverycontrolSafetyRuleTagsList</a>

---

##### `assertionRuleInput`<sup>Optional</sup> <a name="assertionRuleInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRuleInput"></a>

```java
public IResolvable|Route53RecoverycontrolSafetyRuleAssertionRule getAssertionRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---

##### `controlPanelArnInput`<sup>Optional</sup> <a name="controlPanelArnInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArnInput"></a>

```java
public java.lang.String getControlPanelArnInput();
```

- *Type:* java.lang.String

---

##### `gatingRuleInput`<sup>Optional</sup> <a name="gatingRuleInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRuleInput"></a>

```java
public IResolvable|Route53RecoverycontrolSafetyRuleGatingRule getGatingRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ruleConfigInput`<sup>Optional</sup> <a name="ruleConfigInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfigInput"></a>

```java
public IResolvable|Route53RecoverycontrolSafetyRuleRuleConfig getRuleConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Route53RecoverycontrolSafetyRuleTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>>

---

##### `controlPanelArn`<sup>Required</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArn"></a>

```java
public java.lang.String getControlPanelArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolSafetyRuleAssertionRule <a name="Route53RecoverycontrolSafetyRuleAssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRuleAssertionRule;

Route53RecoverycontrolSafetyRuleAssertionRule.builder()
//  .assertedControls(java.util.List<java.lang.String>)
//  .waitPeriodMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.assertedControls">assertedControls</a></code> | <code>java.util.List<java.lang.String></code> | The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.waitPeriodMs">waitPeriodMs</a></code> | <code>java.lang.Number</code> | An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. |

---

##### `assertedControls`<sup>Optional</sup> <a name="assertedControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.assertedControls"></a>

```java
public java.util.List<java.lang.String> getAssertedControls();
```

- *Type:* java.util.List<java.lang.String>

The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed.

For example, you might include three routing controls, one for each of three AWS Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#asserted_controls Route53RecoverycontrolSafetyRule#asserted_controls}

---

##### `waitPeriodMs`<sup>Optional</sup> <a name="waitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.waitPeriodMs"></a>

```java
public java.lang.Number getWaitPeriodMs();
```

- *Type:* java.lang.Number

An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}

---

### Route53RecoverycontrolSafetyRuleConfig <a name="Route53RecoverycontrolSafetyRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRuleConfig;

Route53RecoverycontrolSafetyRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .assertionRule(Route53RecoverycontrolSafetyRuleAssertionRule)
//  .controlPanelArn(java.lang.String)
//  .gatingRule(Route53RecoverycontrolSafetyRuleGatingRule)
//  .name(java.lang.String)
//  .ruleConfig(Route53RecoverycontrolSafetyRuleRuleConfig)
//  .tags(IResolvable|java.util.List<Route53RecoverycontrolSafetyRuleTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.assertionRule">assertionRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.controlPanelArn">controlPanelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the control panel. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.gatingRule">gatingRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for the safety rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | The rule configuration for an assertion rule or gating rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>></code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assertionRule`<sup>Optional</sup> <a name="assertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.assertionRule"></a>

```java
public Route53RecoverycontrolSafetyRuleAssertionRule getAssertionRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met.

Otherwise, the change to the routing control is not accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#assertion_rule Route53RecoverycontrolSafetyRule#assertion_rule}

---

##### `controlPanelArn`<sup>Optional</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.controlPanelArn"></a>

```java
public java.lang.String getControlPanelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the control panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#control_panel_arn Route53RecoverycontrolSafetyRule#control_panel_arn}

---

##### `gatingRule`<sup>Optional</sup> <a name="gatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.gatingRule"></a>

```java
public Route53RecoverycontrolSafetyRuleGatingRule getGatingRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify.

If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#gating_rule Route53RecoverycontrolSafetyRule#gating_rule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for the safety rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#name Route53RecoverycontrolSafetyRule#name}

---

##### `ruleConfig`<sup>Optional</sup> <a name="ruleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.ruleConfig"></a>

```java
public Route53RecoverycontrolSafetyRuleRuleConfig getRuleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

The rule configuration for an assertion rule or gating rule.

This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#rule_config Route53RecoverycontrolSafetyRule#rule_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Route53RecoverycontrolSafetyRuleTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#tags Route53RecoverycontrolSafetyRule#tags}

---

### Route53RecoverycontrolSafetyRuleGatingRule <a name="Route53RecoverycontrolSafetyRuleGatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRuleGatingRule;

Route53RecoverycontrolSafetyRuleGatingRule.builder()
//  .gatingControls(java.util.List<java.lang.String>)
//  .targetControls(java.util.List<java.lang.String>)
//  .waitPeriodMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.gatingControls">gatingControls</a></code> | <code>java.util.List<java.lang.String></code> | The gating controls for the gating rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.targetControls">targetControls</a></code> | <code>java.util.List<java.lang.String></code> | Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.waitPeriodMs">waitPeriodMs</a></code> | <code>java.lang.Number</code> | An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. |

---

##### `gatingControls`<sup>Optional</sup> <a name="gatingControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.gatingControls"></a>

```java
public java.util.List<java.lang.String> getGatingControls();
```

- *Type:* java.util.List<java.lang.String>

The gating controls for the gating rule.

That is, routing controls that are evaluated by the rule configuration that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#gating_controls Route53RecoverycontrolSafetyRule#gating_controls}

---

##### `targetControls`<sup>Optional</sup> <a name="targetControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.targetControls"></a>

```java
public java.util.List<java.lang.String> getTargetControls();
```

- *Type:* java.util.List<java.lang.String>

Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls.

For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.
In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#target_controls Route53RecoverycontrolSafetyRule#target_controls}

---

##### `waitPeriodMs`<sup>Optional</sup> <a name="waitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.waitPeriodMs"></a>

```java
public java.lang.Number getWaitPeriodMs();
```

- *Type:* java.lang.Number

An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}

---

### Route53RecoverycontrolSafetyRuleRuleConfig <a name="Route53RecoverycontrolSafetyRuleRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRuleRuleConfig;

Route53RecoverycontrolSafetyRuleRuleConfig.builder()
//  .inverted(java.lang.Boolean|IResolvable)
//  .threshold(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.inverted">inverted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The value of N, when you specify an ATLEAST rule type. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | A rule can be one of the following: ATLEAST, AND, or OR. |

---

##### `inverted`<sup>Optional</sup> <a name="inverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.inverted"></a>

```java
public java.lang.Boolean|IResolvable getInverted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#inverted Route53RecoverycontrolSafetyRule#inverted}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The value of N, when you specify an ATLEAST rule type.

That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#threshold Route53RecoverycontrolSafetyRule#threshold}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

A rule can be one of the following: ATLEAST, AND, or OR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#type Route53RecoverycontrolSafetyRule#type}

---

### Route53RecoverycontrolSafetyRuleTags <a name="Route53RecoverycontrolSafetyRuleTags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRuleTags;

Route53RecoverycontrolSafetyRuleTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#key Route53RecoverycontrolSafetyRule#key}. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#value Route53RecoverycontrolSafetyRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#key Route53RecoverycontrolSafetyRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_safety_rule#value Route53RecoverycontrolSafetyRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference <a name="Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference;

new Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetAssertedControls">resetAssertedControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetWaitPeriodMs">resetWaitPeriodMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssertedControls` <a name="resetAssertedControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetAssertedControls"></a>

```java
public void resetAssertedControls()
```

##### `resetWaitPeriodMs` <a name="resetWaitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetWaitPeriodMs"></a>

```java
public void resetWaitPeriodMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControlsInput">assertedControlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMsInput">waitPeriodMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls">assertedControls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs">waitPeriodMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assertedControlsInput`<sup>Optional</sup> <a name="assertedControlsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControlsInput"></a>

```java
public java.util.List<java.lang.String> getAssertedControlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitPeriodMsInput`<sup>Optional</sup> <a name="waitPeriodMsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMsInput"></a>

```java
public java.lang.Number getWaitPeriodMsInput();
```

- *Type:* java.lang.Number

---

##### `assertedControls`<sup>Required</sup> <a name="assertedControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls"></a>

```java
public java.util.List<java.lang.String> getAssertedControls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs"></a>

```java
public java.lang.Number getWaitPeriodMs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53RecoverycontrolSafetyRuleAssertionRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---


### Route53RecoverycontrolSafetyRuleGatingRuleOutputReference <a name="Route53RecoverycontrolSafetyRuleGatingRuleOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference;

new Route53RecoverycontrolSafetyRuleGatingRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetGatingControls">resetGatingControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetTargetControls">resetTargetControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetWaitPeriodMs">resetWaitPeriodMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGatingControls` <a name="resetGatingControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetGatingControls"></a>

```java
public void resetGatingControls()
```

##### `resetTargetControls` <a name="resetTargetControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetTargetControls"></a>

```java
public void resetTargetControls()
```

##### `resetWaitPeriodMs` <a name="resetWaitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetWaitPeriodMs"></a>

```java
public void resetWaitPeriodMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControlsInput">gatingControlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControlsInput">targetControlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMsInput">waitPeriodMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls">gatingControls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls">targetControls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs">waitPeriodMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gatingControlsInput`<sup>Optional</sup> <a name="gatingControlsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControlsInput"></a>

```java
public java.util.List<java.lang.String> getGatingControlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetControlsInput`<sup>Optional</sup> <a name="targetControlsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControlsInput"></a>

```java
public java.util.List<java.lang.String> getTargetControlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitPeriodMsInput`<sup>Optional</sup> <a name="waitPeriodMsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMsInput"></a>

```java
public java.lang.Number getWaitPeriodMsInput();
```

- *Type:* java.lang.Number

---

##### `gatingControls`<sup>Required</sup> <a name="gatingControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls"></a>

```java
public java.util.List<java.lang.String> getGatingControls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetControls`<sup>Required</sup> <a name="targetControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls"></a>

```java
public java.util.List<java.lang.String> getTargetControls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs"></a>

```java
public java.lang.Number getWaitPeriodMs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53RecoverycontrolSafetyRuleGatingRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---


### Route53RecoverycontrolSafetyRuleRuleConfigOutputReference <a name="Route53RecoverycontrolSafetyRuleRuleConfigOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference;

new Route53RecoverycontrolSafetyRuleRuleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetInverted">resetInverted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverted` <a name="resetInverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetInverted"></a>

```java
public void resetInverted()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.invertedInput">invertedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted">inverted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invertedInput`<sup>Optional</sup> <a name="invertedInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.invertedInput"></a>

```java
public java.lang.Boolean|IResolvable getInvertedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted"></a>

```java
public java.lang.Boolean|IResolvable getInverted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53RecoverycontrolSafetyRuleRuleConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---


### Route53RecoverycontrolSafetyRuleTagsList <a name="Route53RecoverycontrolSafetyRuleTagsList" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRuleTagsList;

new Route53RecoverycontrolSafetyRuleTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get"></a>

```java
public Route53RecoverycontrolSafetyRuleTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53RecoverycontrolSafetyRuleTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>>

---


### Route53RecoverycontrolSafetyRuleTagsOutputReference <a name="Route53RecoverycontrolSafetyRuleTagsOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_recoverycontrol_safety_rule.Route53RecoverycontrolSafetyRuleTagsOutputReference;

new Route53RecoverycontrolSafetyRuleTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53RecoverycontrolSafetyRuleTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>

---



