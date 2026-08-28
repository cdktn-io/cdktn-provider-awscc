# `xraySamplingRule` Submodule <a name="`xraySamplingRule` Submodule" id="@cdktn/provider-awscc.xraySamplingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XraySamplingRule <a name="XraySamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule awscc_xray_sampling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRule;

XraySamplingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .ruleName(java.lang.String)
//  .samplingRule(XraySamplingRuleSamplingRule)
//  .samplingRuleRecord(XraySamplingRuleSamplingRuleRecord)
//  .samplingRuleUpdate(XraySamplingRuleSamplingRuleUpdate)
//  .tags(IResolvable|java.util.List<XraySamplingRuleTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.ruleName">ruleName</a></code> | <code>java.lang.String</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRule">samplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRuleRecord">samplingRuleRecord</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRuleUpdate">samplingRuleUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.ruleName"></a>

- *Type:* java.lang.String

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `samplingRule`<sup>Optional</sup> <a name="samplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

##### `samplingRuleRecord`<sup>Optional</sup> <a name="samplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRuleRecord"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}.

---

##### `samplingRuleUpdate`<sup>Optional</sup> <a name="samplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.samplingRuleUpdate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#tags XraySamplingRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule">putSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord">putSamplingRuleRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate">putSamplingRuleUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRule">resetSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleRecord">resetSamplingRuleRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleUpdate">resetSamplingRuleUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSamplingRule` <a name="putSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule"></a>

```java
public void putSamplingRule(XraySamplingRuleSamplingRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---

##### `putSamplingRuleRecord` <a name="putSamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord"></a>

```java
public void putSamplingRuleRecord(XraySamplingRuleSamplingRuleRecord value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleRecord.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---

##### `putSamplingRuleUpdate` <a name="putSamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate"></a>

```java
public void putSamplingRuleUpdate(XraySamplingRuleSamplingRuleUpdate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putSamplingRuleUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<XraySamplingRuleTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>>

---

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetSamplingRule` <a name="resetSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRule"></a>

```java
public void resetSamplingRule()
```

##### `resetSamplingRuleRecord` <a name="resetSamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleRecord"></a>

```java
public void resetSamplingRuleRecord()
```

##### `resetSamplingRuleUpdate` <a name="resetSamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetSamplingRuleUpdate"></a>

```java
public void resetSamplingRuleUpdate()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a XraySamplingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRule;

XraySamplingRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRule;

XraySamplingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRule;

XraySamplingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRule;

XraySamplingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),XraySamplingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a XraySamplingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the XraySamplingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing XraySamplingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the XraySamplingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRule">samplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference">XraySamplingRuleSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecord">samplingRuleRecord</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference">XraySamplingRuleSamplingRuleRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdate">samplingRuleUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference">XraySamplingRuleSamplingRuleUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList">XraySamplingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleInput">samplingRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecordInput">samplingRuleRecordInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdateInput">samplingRuleUpdateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

---

##### `samplingRule`<sup>Required</sup> <a name="samplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRule"></a>

```java
public XraySamplingRuleSamplingRuleOutputReference getSamplingRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference">XraySamplingRuleSamplingRuleOutputReference</a>

---

##### `samplingRuleRecord`<sup>Required</sup> <a name="samplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecord"></a>

```java
public XraySamplingRuleSamplingRuleRecordOutputReference getSamplingRuleRecord();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference">XraySamplingRuleSamplingRuleRecordOutputReference</a>

---

##### `samplingRuleUpdate`<sup>Required</sup> <a name="samplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdate"></a>

```java
public XraySamplingRuleSamplingRuleUpdateOutputReference getSamplingRuleUpdate();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference">XraySamplingRuleSamplingRuleUpdateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tags"></a>

```java
public XraySamplingRuleTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList">XraySamplingRuleTagsList</a>

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `samplingRuleInput`<sup>Optional</sup> <a name="samplingRuleInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleInput"></a>

```java
public IResolvable|XraySamplingRuleSamplingRule getSamplingRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---

##### `samplingRuleRecordInput`<sup>Optional</sup> <a name="samplingRuleRecordInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleRecordInput"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleRecord getSamplingRuleRecordInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---

##### `samplingRuleUpdateInput`<sup>Optional</sup> <a name="samplingRuleUpdateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.samplingRuleUpdateInput"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleUpdate getSamplingRuleUpdateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tagsInput"></a>

```java
public IResolvable|java.util.List<XraySamplingRuleTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>>

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### XraySamplingRuleConfig <a name="XraySamplingRuleConfig" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleConfig;

XraySamplingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .ruleName(java.lang.String)
//  .samplingRule(XraySamplingRuleSamplingRule)
//  .samplingRuleRecord(XraySamplingRuleSamplingRuleRecord)
//  .samplingRuleUpdate(XraySamplingRuleSamplingRuleUpdate)
//  .tags(IResolvable|java.util.List<XraySamplingRuleTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRule">samplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleRecord">samplingRuleRecord</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleUpdate">samplingRuleUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `samplingRule`<sup>Optional</sup> <a name="samplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRule"></a>

```java
public XraySamplingRuleSamplingRule getSamplingRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

##### `samplingRuleRecord`<sup>Optional</sup> <a name="samplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleRecord"></a>

```java
public XraySamplingRuleSamplingRuleRecord getSamplingRuleRecord();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_record XraySamplingRule#sampling_rule_record}.

---

##### `samplingRuleUpdate`<sup>Optional</sup> <a name="samplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.samplingRuleUpdate"></a>

```java
public XraySamplingRuleSamplingRuleUpdate getSamplingRuleUpdate();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule_update XraySamplingRule#sampling_rule_update}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleConfig.property.tags"></a>

```java
public IResolvable|java.util.List<XraySamplingRuleTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#tags XraySamplingRule#tags}

---

### XraySamplingRuleSamplingRule <a name="XraySamplingRuleSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRule;

XraySamplingRuleSamplingRule.builder()
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .fixedRate(java.lang.Number)
//  .host(java.lang.String)
//  .httpMethod(java.lang.String)
//  .priority(java.lang.Number)
//  .reservoirSize(java.lang.Number)
//  .resourceArn(java.lang.String)
//  .ruleArn(java.lang.String)
//  .ruleName(java.lang.String)
//  .samplingRateBoost(XraySamplingRuleSamplingRuleSamplingRateBoost)
//  .serviceName(java.lang.String)
//  .serviceType(java.lang.String)
//  .urlPath(java.lang.String)
//  .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.fixedRate">fixedRate</a></code> | <code>java.lang.Number</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.host">host</a></code> | <code>java.lang.String</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.reservoirSize">reservoirSize</a></code> | <code>java.lang.Number</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | Matches the path from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.version">version</a></code> | <code>java.lang.Number</code> | The version of the sampling rule format (1). |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `fixedRate`<sup>Optional</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.fixedRate"></a>

```java
public java.lang.Number getFixedRate();
```

- *Type:* java.lang.Number

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `reservoirSize`<sup>Optional</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.reservoirSize"></a>

```java
public java.lang.Number getReservoirSize();
```

- *Type:* java.lang.Number

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `ruleArn`<sup>Optional</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `samplingRateBoost`<sup>Optional</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.samplingRateBoost"></a>

```java
public XraySamplingRuleSamplingRuleSamplingRateBoost getSamplingRateBoost();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

The version of the sampling rule format (1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}

---

### XraySamplingRuleSamplingRuleRecord <a name="XraySamplingRuleSamplingRuleRecord" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleRecord;

XraySamplingRuleSamplingRuleRecord.builder()
//  .createdAt(java.lang.String)
//  .modifiedAt(java.lang.String)
//  .samplingRule(XraySamplingRuleSamplingRuleRecordSamplingRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | When the rule was created, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | When the rule was modified, in Unix time seconds. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.samplingRule">samplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}. |

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

When the rule was created, in Unix time seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#created_at XraySamplingRule#created_at}

---

##### `modifiedAt`<sup>Optional</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

When the rule was modified, in Unix time seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#modified_at XraySamplingRule#modified_at}

---

##### `samplingRule`<sup>Optional</sup> <a name="samplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord.property.samplingRule"></a>

```java
public XraySamplingRuleSamplingRuleRecordSamplingRule getSamplingRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rule XraySamplingRule#sampling_rule}.

---

### XraySamplingRuleSamplingRuleRecordSamplingRule <a name="XraySamplingRuleSamplingRuleRecordSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleRecordSamplingRule;

XraySamplingRuleSamplingRuleRecordSamplingRule.builder()
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .fixedRate(java.lang.Number)
//  .host(java.lang.String)
//  .httpMethod(java.lang.String)
//  .priority(java.lang.Number)
//  .reservoirSize(java.lang.Number)
//  .resourceArn(java.lang.String)
//  .ruleArn(java.lang.String)
//  .ruleName(java.lang.String)
//  .samplingRateBoost(XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost)
//  .serviceName(java.lang.String)
//  .serviceType(java.lang.String)
//  .urlPath(java.lang.String)
//  .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate">fixedRate</a></code> | <code>java.lang.Number</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.host">host</a></code> | <code>java.lang.String</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize">reservoirSize</a></code> | <code>java.lang.Number</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | Matches the path from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.version">version</a></code> | <code>java.lang.Number</code> | The version of the sampling rule format (1). |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `fixedRate`<sup>Optional</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.fixedRate"></a>

```java
public java.lang.Number getFixedRate();
```

- *Type:* java.lang.Number

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `reservoirSize`<sup>Optional</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.reservoirSize"></a>

```java
public java.lang.Number getReservoirSize();
```

- *Type:* java.lang.Number

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `ruleArn`<sup>Optional</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `samplingRateBoost`<sup>Optional</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.samplingRateBoost"></a>

```java
public XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost getSamplingRateBoost();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

The version of the sampling rule format (1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#version XraySamplingRule#version}

---

### XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost;

XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.builder()
//  .cooldownWindowMinutes(java.lang.Number)
//  .maxRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>java.lang.Number</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `cooldownWindowMinutes`<sup>Optional</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes"></a>

```java
public java.lang.Number getCooldownWindowMinutes();
```

- *Type:* java.lang.Number

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleSamplingRuleSamplingRateBoost <a name="XraySamplingRuleSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleSamplingRateBoost;

XraySamplingRuleSamplingRuleSamplingRateBoost.builder()
//  .cooldownWindowMinutes(java.lang.Number)
//  .maxRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>java.lang.Number</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `cooldownWindowMinutes`<sup>Optional</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.cooldownWindowMinutes"></a>

```java
public java.lang.Number getCooldownWindowMinutes();
```

- *Type:* java.lang.Number

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleSamplingRuleUpdate <a name="XraySamplingRuleSamplingRuleUpdate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleUpdate;

XraySamplingRuleSamplingRuleUpdate.builder()
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .fixedRate(java.lang.Number)
//  .host(java.lang.String)
//  .httpMethod(java.lang.String)
//  .priority(java.lang.Number)
//  .reservoirSize(java.lang.Number)
//  .resourceArn(java.lang.String)
//  .ruleArn(java.lang.String)
//  .ruleName(java.lang.String)
//  .samplingRateBoost(XraySamplingRuleSamplingRuleUpdateSamplingRateBoost)
//  .serviceName(java.lang.String)
//  .serviceType(java.lang.String)
//  .urlPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Matches attributes derived from the request. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.fixedRate">fixedRate</a></code> | <code>java.lang.Number</code> | The percentage of matching requests to instrument, after the reservoir is exhausted. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.host">host</a></code> | <code>java.lang.String</code> | Matches the hostname from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Matches the HTTP method from a request URL. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the sampling rule. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.reservoirSize">reservoirSize</a></code> | <code>java.lang.Number</code> | A fixed number of matching requests to instrument per second, prior to applying the fixed rate. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Matches the ARN of the AWS resource on which the service runs. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Matches the name that the service uses to identify itself in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Matches the origin that the service uses to identify its type in segments. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | Matches the path from a request URL. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Matches attributes derived from the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#attributes XraySamplingRule#attributes}

---

##### `fixedRate`<sup>Optional</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.fixedRate"></a>

```java
public java.lang.Number getFixedRate();
```

- *Type:* java.lang.Number

The percentage of matching requests to instrument, after the reservoir is exhausted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Matches the hostname from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#host XraySamplingRule#host}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Matches the HTTP method from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#http_method XraySamplingRule#http_method}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of the sampling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#priority XraySamplingRule#priority}

---

##### `reservoirSize`<sup>Optional</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.reservoirSize"></a>

```java
public java.lang.Number getReservoirSize();
```

- *Type:* java.lang.Number

A fixed number of matching requests to instrument per second, prior to applying the fixed rate.

The reservoir is not used directly by services, but applies to all services using the rule collectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

Matches the ARN of the AWS resource on which the service runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}

---

##### `ruleArn`<sup>Optional</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_arn XraySamplingRule#rule_arn}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#rule_name XraySamplingRule#rule_name}

---

##### `samplingRateBoost`<sup>Optional</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.samplingRateBoost"></a>

```java
public XraySamplingRuleSamplingRuleUpdateSamplingRateBoost getSamplingRateBoost();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#sampling_rate_boost XraySamplingRule#sampling_rate_boost}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Matches the name that the service uses to identify itself in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_name XraySamplingRule#service_name}

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

Matches the origin that the service uses to identify its type in segments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#service_type XraySamplingRule#service_type}

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

Matches the path from a request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#url_path XraySamplingRule#url_path}

---

### XraySamplingRuleSamplingRuleUpdateSamplingRateBoost <a name="XraySamplingRuleSamplingRuleUpdateSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost;

XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.builder()
//  .cooldownWindowMinutes(java.lang.Number)
//  .maxRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>java.lang.Number</code> | Time window (in minutes) in which only one sampling rate boost can be triggered. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | The maximum sampling rate X-Ray will apply when it detects anomalies. |

---

##### `cooldownWindowMinutes`<sup>Optional</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.cooldownWindowMinutes"></a>

```java
public java.lang.Number getCooldownWindowMinutes();
```

- *Type:* java.lang.Number

Time window (in minutes) in which only one sampling rate boost can be triggered.

After a boost occurs, no further boosts are allowed until the next window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#cooldown_window_minutes XraySamplingRule#cooldown_window_minutes}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

The maximum sampling rate X-Ray will apply when it detects anomalies.

X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#max_rate XraySamplingRule#max_rate}

---

### XraySamplingRuleTags <a name="XraySamplingRuleTags" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleTags;

XraySamplingRuleTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#key XraySamplingRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_sampling_rule#value XraySamplingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### XraySamplingRuleSamplingRuleOutputReference <a name="XraySamplingRuleSamplingRuleOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleOutputReference;

new XraySamplingRuleSamplingRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost">putSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetFixedRate">resetFixedRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetReservoirSize">resetReservoirSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleArn">resetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetSamplingRateBoost">resetSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSamplingRateBoost` <a name="putSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost"></a>

```java
public void putSamplingRateBoost(XraySamplingRuleSamplingRuleSamplingRateBoost value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.putSamplingRateBoost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetFixedRate` <a name="resetFixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetFixedRate"></a>

```java
public void resetFixedRate()
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetReservoirSize` <a name="resetReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetReservoirSize"></a>

```java
public void resetReservoirSize()
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetResourceArn"></a>

```java
public void resetResourceArn()
```

##### `resetRuleArn` <a name="resetRuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleArn"></a>

```java
public void resetRuleArn()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetSamplingRateBoost` <a name="resetSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetSamplingRateBoost"></a>

```java
public void resetSamplingRateBoost()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetServiceType"></a>

```java
public void resetServiceType()
```

##### `resetUrlPath` <a name="resetUrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetUrlPath"></a>

```java
public void resetUrlPath()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRateInput">fixedRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSizeInput">reservoirSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArnInput">ruleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoostInput">samplingRateBoostInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRate">fixedRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSize">reservoirSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `samplingRateBoost`<sup>Required</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost"></a>

```java
public XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference getSamplingRateBoost();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fixedRateInput`<sup>Optional</sup> <a name="fixedRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRateInput"></a>

```java
public java.lang.Number getFixedRateInput();
```

- *Type:* java.lang.Number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `reservoirSizeInput`<sup>Optional</sup> <a name="reservoirSizeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSizeInput"></a>

```java
public java.lang.Number getReservoirSizeInput();
```

- *Type:* java.lang.Number

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `ruleArnInput`<sup>Optional</sup> <a name="ruleArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArnInput"></a>

```java
public java.lang.String getRuleArnInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `samplingRateBoostInput`<sup>Optional</sup> <a name="samplingRateBoostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoostInput"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleSamplingRateBoost getSamplingRateBoostInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPathInput"></a>

```java
public java.lang.String getUrlPathInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fixedRate`<sup>Required</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.fixedRate"></a>

```java
public java.lang.Number getFixedRate();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `reservoirSize`<sup>Required</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.reservoirSize"></a>

```java
public java.lang.Number getReservoirSize();
```

- *Type:* java.lang.Number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|XraySamplingRuleSamplingRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRule">XraySamplingRuleSamplingRule</a>

---


### XraySamplingRuleSamplingRuleRecordOutputReference <a name="XraySamplingRuleSamplingRuleRecordOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleRecordOutputReference;

new XraySamplingRuleSamplingRuleRecordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule">putSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetModifiedAt">resetModifiedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetSamplingRule">resetSamplingRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSamplingRule` <a name="putSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule"></a>

```java
public void putSamplingRule(XraySamplingRuleSamplingRuleRecordSamplingRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.putSamplingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetModifiedAt` <a name="resetModifiedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetModifiedAt"></a>

```java
public void resetModifiedAt()
```

##### `resetSamplingRule` <a name="resetSamplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.resetSamplingRule"></a>

```java
public void resetSamplingRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule">samplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAtInput">modifiedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRuleInput">samplingRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `samplingRule`<sup>Required</sup> <a name="samplingRule" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule"></a>

```java
public XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference getSamplingRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a>

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAtInput"></a>

```java
public java.lang.String getCreatedAtInput();
```

- *Type:* java.lang.String

---

##### `modifiedAtInput`<sup>Optional</sup> <a name="modifiedAtInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAtInput"></a>

```java
public java.lang.String getModifiedAtInput();
```

- *Type:* java.lang.String

---

##### `samplingRuleInput`<sup>Optional</sup> <a name="samplingRuleInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRuleInput"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleRecordSamplingRule getSamplingRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleRecord getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecord">XraySamplingRuleSamplingRuleRecord</a>

---


### XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference;

new XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost">putSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetFixedRate">resetFixedRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetReservoirSize">resetReservoirSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleArn">resetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetSamplingRateBoost">resetSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSamplingRateBoost` <a name="putSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost"></a>

```java
public void putSamplingRateBoost(XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.putSamplingRateBoost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetFixedRate` <a name="resetFixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetFixedRate"></a>

```java
public void resetFixedRate()
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetReservoirSize` <a name="resetReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetReservoirSize"></a>

```java
public void resetReservoirSize()
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetResourceArn"></a>

```java
public void resetResourceArn()
```

##### `resetRuleArn` <a name="resetRuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleArn"></a>

```java
public void resetRuleArn()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetSamplingRateBoost` <a name="resetSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetSamplingRateBoost"></a>

```java
public void resetSamplingRateBoost()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetServiceType"></a>

```java
public void resetServiceType()
```

##### `resetUrlPath` <a name="resetUrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetUrlPath"></a>

```java
public void resetUrlPath()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRateInput">fixedRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSizeInput">reservoirSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArnInput">ruleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoostInput">samplingRateBoostInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate">fixedRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize">reservoirSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `samplingRateBoost`<sup>Required</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost"></a>

```java
public XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference getSamplingRateBoost();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fixedRateInput`<sup>Optional</sup> <a name="fixedRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRateInput"></a>

```java
public java.lang.Number getFixedRateInput();
```

- *Type:* java.lang.Number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `reservoirSizeInput`<sup>Optional</sup> <a name="reservoirSizeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSizeInput"></a>

```java
public java.lang.Number getReservoirSizeInput();
```

- *Type:* java.lang.Number

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `ruleArnInput`<sup>Optional</sup> <a name="ruleArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArnInput"></a>

```java
public java.lang.String getRuleArnInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `samplingRateBoostInput`<sup>Optional</sup> <a name="samplingRateBoostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoostInput"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost getSamplingRateBoostInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPathInput"></a>

```java
public java.lang.String getUrlPathInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fixedRate`<sup>Required</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate"></a>

```java
public java.lang.Number getFixedRate();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `reservoirSize`<sup>Required</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize"></a>

```java
public java.lang.Number getReservoirSize();
```

- *Type:* java.lang.Number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleRecordSamplingRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRule">XraySamplingRuleSamplingRuleRecordSamplingRule</a>

---


### XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference;

new XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes">resetCooldownWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCooldownWindowMinutes` <a name="resetCooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```java
public void resetCooldownWindowMinutes()
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resetMaxRate"></a>

```java
public void resetMaxRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">cooldownWindowMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cooldownWindowMinutesInput`<sup>Optional</sup> <a name="cooldownWindowMinutesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```java
public java.lang.Number getCooldownWindowMinutesInput();
```

- *Type:* java.lang.Number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput"></a>

```java
public java.lang.Number getMaxRateInput();
```

- *Type:* java.lang.Number

---

##### `cooldownWindowMinutes`<sup>Required</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```java
public java.lang.Number getCooldownWindowMinutes();
```

- *Type:* java.lang.Number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---


### XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference;

new XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes">resetCooldownWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCooldownWindowMinutes` <a name="resetCooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```java
public void resetCooldownWindowMinutes()
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resetMaxRate"></a>

```java
public void resetMaxRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">cooldownWindowMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cooldownWindowMinutesInput`<sup>Optional</sup> <a name="cooldownWindowMinutesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```java
public java.lang.Number getCooldownWindowMinutesInput();
```

- *Type:* java.lang.Number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRateInput"></a>

```java
public java.lang.Number getMaxRateInput();
```

- *Type:* java.lang.Number

---

##### `cooldownWindowMinutes`<sup>Required</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```java
public java.lang.Number getCooldownWindowMinutes();
```

- *Type:* java.lang.Number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleSamplingRateBoost getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleSamplingRateBoost">XraySamplingRuleSamplingRuleSamplingRateBoost</a>

---


### XraySamplingRuleSamplingRuleUpdateOutputReference <a name="XraySamplingRuleSamplingRuleUpdateOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleUpdateOutputReference;

new XraySamplingRuleSamplingRuleUpdateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost">putSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetFixedRate">resetFixedRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetReservoirSize">resetReservoirSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleArn">resetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetSamplingRateBoost">resetSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSamplingRateBoost` <a name="putSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost"></a>

```java
public void putSamplingRateBoost(XraySamplingRuleSamplingRuleUpdateSamplingRateBoost value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.putSamplingRateBoost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetFixedRate` <a name="resetFixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetFixedRate"></a>

```java
public void resetFixedRate()
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetReservoirSize` <a name="resetReservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetReservoirSize"></a>

```java
public void resetReservoirSize()
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetResourceArn"></a>

```java
public void resetResourceArn()
```

##### `resetRuleArn` <a name="resetRuleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleArn"></a>

```java
public void resetRuleArn()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetSamplingRateBoost` <a name="resetSamplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetSamplingRateBoost"></a>

```java
public void resetSamplingRateBoost()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetServiceType"></a>

```java
public void resetServiceType()
```

##### `resetUrlPath` <a name="resetUrlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.resetUrlPath"></a>

```java
public void resetUrlPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost">samplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRateInput">fixedRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSizeInput">reservoirSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArnInput">ruleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoostInput">samplingRateBoostInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate">fixedRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize">reservoirSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn">ruleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `samplingRateBoost`<sup>Required</sup> <a name="samplingRateBoost" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost"></a>

```java
public XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference getSamplingRateBoost();
```

- *Type:* <a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fixedRateInput`<sup>Optional</sup> <a name="fixedRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRateInput"></a>

```java
public java.lang.Number getFixedRateInput();
```

- *Type:* java.lang.Number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `reservoirSizeInput`<sup>Optional</sup> <a name="reservoirSizeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSizeInput"></a>

```java
public java.lang.Number getReservoirSizeInput();
```

- *Type:* java.lang.Number

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `ruleArnInput`<sup>Optional</sup> <a name="ruleArnInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArnInput"></a>

```java
public java.lang.String getRuleArnInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `samplingRateBoostInput`<sup>Optional</sup> <a name="samplingRateBoostInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoostInput"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleUpdateSamplingRateBoost getSamplingRateBoostInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPathInput"></a>

```java
public java.lang.String getUrlPathInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fixedRate`<sup>Required</sup> <a name="fixedRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate"></a>

```java
public java.lang.Number getFixedRate();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `reservoirSize`<sup>Required</sup> <a name="reservoirSize" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize"></a>

```java
public java.lang.Number getReservoirSize();
```

- *Type:* java.lang.Number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn"></a>

```java
public java.lang.String getRuleArn();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleUpdate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdate">XraySamplingRuleSamplingRuleUpdate</a>

---


### XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference <a name="XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference;

new XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetCooldownWindowMinutes">resetCooldownWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCooldownWindowMinutes` <a name="resetCooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetCooldownWindowMinutes"></a>

```java
public void resetCooldownWindowMinutes()
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resetMaxRate"></a>

```java
public void resetMaxRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput">cooldownWindowMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldownWindowMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cooldownWindowMinutesInput`<sup>Optional</sup> <a name="cooldownWindowMinutesInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutesInput"></a>

```java
public java.lang.Number getCooldownWindowMinutesInput();
```

- *Type:* java.lang.Number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRateInput"></a>

```java
public java.lang.Number getMaxRateInput();
```

- *Type:* java.lang.Number

---

##### `cooldownWindowMinutes`<sup>Required</sup> <a name="cooldownWindowMinutes" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```java
public java.lang.Number getCooldownWindowMinutes();
```

- *Type:* java.lang.Number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue"></a>

```java
public IResolvable|XraySamplingRuleSamplingRuleUpdateSamplingRateBoost getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleSamplingRuleUpdateSamplingRateBoost">XraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---


### XraySamplingRuleTagsList <a name="XraySamplingRuleTagsList" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleTagsList;

new XraySamplingRuleTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get"></a>

```java
public XraySamplingRuleTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<XraySamplingRuleTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>>

---


### XraySamplingRuleTagsOutputReference <a name="XraySamplingRuleTagsOutputReference" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.xray_sampling_rule.XraySamplingRuleTagsOutputReference;

new XraySamplingRuleTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|XraySamplingRuleTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xraySamplingRule.XraySamplingRuleTags">XraySamplingRuleTags</a>

---



