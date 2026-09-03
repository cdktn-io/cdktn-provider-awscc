# `configConfigRule` Submodule <a name="`configConfigRule` Submodule" id="@cdktn/provider-awscc.configConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigRule <a name="ConfigConfigRule" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule awscc_config_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRule;

ConfigConfigRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .source(ConfigConfigRuleSource)
//  .compliance(ConfigConfigRuleCompliance)
//  .configRuleName(java.lang.String)
//  .description(java.lang.String)
//  .evaluationModes(IResolvable|java.util.List<ConfigConfigRuleEvaluationModes>)
//  .inputParameters(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .scope(ConfigConfigRuleScope)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.compliance">compliance</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.configRuleName">configRuleName</a></code> | <code>java.lang.String</code> | A name for the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description that you provide for the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.evaluationModes">evaluationModes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>></code> | The modes the CC rule can be evaluated in. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | A string, in JSON format, that is passed to the CC rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | The maximum frequency with which CC runs evaluations for a rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | Defines which resources can trigger an evaluation for the rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

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

##### `configRuleName`<sup>Optional</sup> <a name="configRuleName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.configRuleName"></a>

- *Type:* java.lang.String

A name for the CC rule.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the rule name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#config_rule_name ConfigConfigRule#config_rule_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description that you provide for the CC rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#description ConfigConfigRule#description}

---

##### `evaluationModes`<sup>Optional</sup> <a name="evaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.evaluationModes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>>

The modes the CC rule can be evaluated in.

The valid values are distinct objects. By default, the value is Detective evaluation mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#evaluation_modes ConfigConfigRule#evaluation_modes}

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.inputParameters"></a>

- *Type:* java.lang.String

A string, in JSON format, that is passed to the CC rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#input_parameters ConfigConfigRule#input_parameters}

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.Initializer.parameter.maximumExecutionFrequency"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putCompliance">putCompliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putEvaluationModes">putEvaluationModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetCompliance">resetCompliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetConfigRuleName">resetConfigRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetEvaluationModes">resetEvaluationModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompliance` <a name="putCompliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putCompliance"></a>

```java
public void putCompliance(ConfigConfigRuleCompliance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putCompliance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

---

##### `putEvaluationModes` <a name="putEvaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putEvaluationModes"></a>

```java
public void putEvaluationModes(IResolvable|java.util.List<ConfigConfigRuleEvaluationModes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putEvaluationModes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>>

---

##### `putScope` <a name="putScope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope"></a>

```java
public void putScope(ConfigConfigRuleScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource"></a>

```java
public void putSource(ConfigConfigRuleSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `resetCompliance` <a name="resetCompliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetCompliance"></a>

```java
public void resetCompliance()
```

##### `resetConfigRuleName` <a name="resetConfigRuleName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetConfigRuleName"></a>

```java
public void resetConfigRuleName()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEvaluationModes` <a name="resetEvaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetEvaluationModes"></a>

```java
public void resetEvaluationModes()
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetInputParameters"></a>

```java
public void resetInputParameters()
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency"></a>

```java
public void resetMaximumExecutionFrequency()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.resetScope"></a>

```java
public void resetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRule;

ConfigConfigRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRule;

ConfigConfigRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRule;

ConfigConfigRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRule;

ConfigConfigRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigConfigRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConfigConfigRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigConfigRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.compliance">compliance</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference">ConfigConfigRuleComplianceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleId">configRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModes">evaluationModes</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList">ConfigConfigRuleEvaluationModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.complianceInput">complianceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleNameInput">configRuleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModesInput">evaluationModesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParametersInput">inputParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scopeInput">scopeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.sourceInput">sourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleName">configRuleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `compliance`<sup>Required</sup> <a name="compliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.compliance"></a>

```java
public ConfigConfigRuleComplianceOutputReference getCompliance();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference">ConfigConfigRuleComplianceOutputReference</a>

---

##### `configRuleId`<sup>Required</sup> <a name="configRuleId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleId"></a>

```java
public java.lang.String getConfigRuleId();
```

- *Type:* java.lang.String

---

##### `evaluationModes`<sup>Required</sup> <a name="evaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModes"></a>

```java
public ConfigConfigRuleEvaluationModesList getEvaluationModes();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList">ConfigConfigRuleEvaluationModesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scope"></a>

```java
public ConfigConfigRuleScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.source"></a>

```java
public ConfigConfigRuleSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a>

---

##### `complianceInput`<sup>Optional</sup> <a name="complianceInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.complianceInput"></a>

```java
public IResolvable|ConfigConfigRuleCompliance getComplianceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

---

##### `configRuleNameInput`<sup>Optional</sup> <a name="configRuleNameInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleNameInput"></a>

```java
public java.lang.String getConfigRuleNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `evaluationModesInput`<sup>Optional</sup> <a name="evaluationModesInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.evaluationModesInput"></a>

```java
public IResolvable|java.util.List<ConfigConfigRuleEvaluationModes> getEvaluationModesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>>

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParametersInput"></a>

```java
public java.lang.String getInputParametersInput();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput"></a>

```java
public java.lang.String getMaximumExecutionFrequencyInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.scopeInput"></a>

```java
public IResolvable|ConfigConfigRuleScope getScopeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.sourceInput"></a>

```java
public IResolvable|ConfigConfigRuleSource getSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `configRuleName`<sup>Required</sup> <a name="configRuleName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.configRuleName"></a>

```java
public java.lang.String getConfigRuleName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigRuleCompliance <a name="ConfigConfigRuleCompliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleCompliance;

ConfigConfigRuleCompliance.builder()
    .build();
```


### ConfigConfigRuleConfig <a name="ConfigConfigRuleConfig" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleConfig;

ConfigConfigRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .source(ConfigConfigRuleSource)
//  .compliance(ConfigConfigRuleCompliance)
//  .configRuleName(java.lang.String)
//  .description(java.lang.String)
//  .evaluationModes(IResolvable|java.util.List<ConfigConfigRuleEvaluationModes>)
//  .inputParameters(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .scope(ConfigConfigRuleScope)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.compliance">compliance</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.configRuleName">configRuleName</a></code> | <code>java.lang.String</code> | A name for the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description that you provide for the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.evaluationModes">evaluationModes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>></code> | The modes the CC rule can be evaluated in. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | A string, in JSON format, that is passed to the CC rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | The maximum frequency with which CC runs evaluations for a rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | Defines which resources can trigger an evaluation for the rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.source"></a>

```java
public ConfigConfigRuleSource getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#source ConfigConfigRule#source}

---

##### `compliance`<sup>Optional</sup> <a name="compliance" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.compliance"></a>

```java
public ConfigConfigRuleCompliance getCompliance();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#compliance ConfigConfigRule#compliance}

---

##### `configRuleName`<sup>Optional</sup> <a name="configRuleName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.configRuleName"></a>

```java
public java.lang.String getConfigRuleName();
```

- *Type:* java.lang.String

A name for the CC rule.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the rule name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#config_rule_name ConfigConfigRule#config_rule_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description that you provide for the CC rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#description ConfigConfigRule#description}

---

##### `evaluationModes`<sup>Optional</sup> <a name="evaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.evaluationModes"></a>

```java
public IResolvable|java.util.List<ConfigConfigRuleEvaluationModes> getEvaluationModes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>>

The modes the CC rule can be evaluated in.

The valid values are distinct objects. By default, the value is Detective evaluation mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#evaluation_modes ConfigConfigRule#evaluation_modes}

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

A string, in JSON format, that is passed to the CC rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#input_parameters ConfigConfigRule#input_parameters}

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

The maximum frequency with which CC runs evaluations for a rule.

You can specify a value for `MaximumExecutionFrequency` when:

* You are using an AWS managed rule that is triggered at a periodic frequency.
* Your custom rule is triggered when CC delivers the configuration snapshot. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigSnapshotDeliveryProperties.html).

By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleConfig.property.scope"></a>

```java
public ConfigConfigRuleScope getScope();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

Defines which resources can trigger an evaluation for the rule.

The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#scope ConfigConfigRule#scope}

---

### ConfigConfigRuleEvaluationModes <a name="ConfigConfigRuleEvaluationModes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleEvaluationModes;

ConfigConfigRuleEvaluationModes.builder()
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode of an evaluation. The valid values are Detective or Proactive. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode of an evaluation. The valid values are Detective or Proactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#mode ConfigConfigRule#mode}

---

### ConfigConfigRuleScope <a name="ConfigConfigRuleScope" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleScope;

ConfigConfigRuleScope.builder()
//  .complianceResourceId(java.lang.String)
//  .complianceResourceTypes(java.util.List<java.lang.String>)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId">complianceResourceId</a></code> | <code>java.lang.String</code> | The ID of the only AWS resource that you want to trigger an evaluation for the rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes">complianceResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | The resource types of only those AWS resources that you want to trigger an evaluation for the rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. |

---

##### `complianceResourceId`<sup>Optional</sup> <a name="complianceResourceId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId"></a>

```java
public java.lang.String getComplianceResourceId();
```

- *Type:* java.lang.String

The ID of the only AWS resource that you want to trigger an evaluation for the rule.

If you specify a resource ID, you must specify one resource type for `ComplianceResourceTypes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}

---

##### `complianceResourceTypes`<sup>Optional</sup> <a name="complianceResourceTypes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes"></a>

```java
public java.util.List<java.lang.String> getComplianceResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

The resource types of only those AWS resources that you want to trigger an evaluation for the rule.

You can only specify one type if you also specify a resource ID for `ComplianceResourceId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#tag_key ConfigConfigRule#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule.

If you specify a value for `TagValue`, you must also specify a value for `TagKey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#tag_value ConfigConfigRule#tag_value}

---

### ConfigConfigRuleSource <a name="ConfigConfigRuleSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleSource;

ConfigConfigRuleSource.builder()
    .owner(java.lang.String)
//  .customPolicyDetails(ConfigConfigRuleSourceCustomPolicyDetails)
//  .sourceDetails(IResolvable|java.util.List<ConfigConfigRuleSourceSourceDetails>)
//  .sourceIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.owner">owner</a></code> | <code>java.lang.String</code> | Indicates whether AWS or the customer owns and manages the CC rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails">customPolicyDetails</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to ``CUSTOM_POLICY``. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceDetails">sourceDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>></code> | Provides the source and the message types that cause CC to evaluate your AWS resources against a rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier">sourceIdentifier</a></code> | <code>java.lang.String</code> | For CC Managed rules, a predefined identifier from a list. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Indicates whether AWS or the customer owns and manages the CC rule.

CC Managed Rules are predefined rules owned by AWS. For more information, see [Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) in the *developer guide*.
CC Custom Rules are rules that you can develop either with Guard (`CUSTOM_POLICY`) or LAMlong (`CUSTOM_LAMBDA`). For more information, see [Custom Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html) in the *developer guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#owner ConfigConfigRule#owner}

---

##### `customPolicyDetails`<sup>Optional</sup> <a name="customPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails"></a>

```java
public ConfigConfigRuleSourceCustomPolicyDetails getCustomPolicyDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to ``CUSTOM_POLICY``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}

---

##### `sourceDetails`<sup>Optional</sup> <a name="sourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceDetails"></a>

```java
public IResolvable|java.util.List<ConfigConfigRuleSourceSourceDetails> getSourceDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>>

Provides the source and the message types that cause CC to evaluate your AWS resources against a rule.

It also provides the frequency with which you want CC to run evaluations for the rule if the trigger type is periodic.
If the owner is set to `CUSTOM_POLICY`, the only acceptable values for the CC rule trigger message type are `ConfigurationItemChangeNotification` and `OversizedConfigurationItemChangeNotification`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#source_details ConfigConfigRule#source_details}

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="sourceIdentifier" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier"></a>

```java
public java.lang.String getSourceIdentifier();
```

- *Type:* java.lang.String

For CC Managed rules, a predefined identifier from a list.

For example, `IAM_PASSWORD_POLICY` is a managed rule. To reference a managed rule, see [List of Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html).
For CC Custom Lambda rules, the identifier is the Amazon Resource Name (ARN) of the rule's LAMlong function, such as `arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name`.
For CC Custom Policy rules, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#source_identifier ConfigConfigRule#source_identifier}

---

### ConfigConfigRuleSourceCustomPolicyDetails <a name="ConfigConfigRuleSourceCustomPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleSourceCustomPolicyDetails;

ConfigConfigRuleSourceCustomPolicyDetails.builder()
//  .enableDebugLogDelivery(java.lang.Boolean|IResolvable)
//  .policyRuntime(java.lang.String)
//  .policyText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery">enableDebugLogDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The boolean expression for enabling debug logging for your CC Custom Policy rule. The default value is ``false``. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime">policyRuntime</a></code> | <code>java.lang.String</code> | The runtime system for your CC Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText">policyText</a></code> | <code>java.lang.String</code> | The policy definition containing the logic for your CC Custom Policy rule. |

---

##### `enableDebugLogDelivery`<sup>Optional</sup> <a name="enableDebugLogDelivery" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery"></a>

```java
public java.lang.Boolean|IResolvable getEnableDebugLogDelivery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The boolean expression for enabling debug logging for your CC Custom Policy rule. The default value is ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}

---

##### `policyRuntime`<sup>Optional</sup> <a name="policyRuntime" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime"></a>

```java
public java.lang.String getPolicyRuntime();
```

- *Type:* java.lang.String

The runtime system for your CC Custom Policy rule.

Guard is a policy-as-code language that allows you to write policies that are enforced by CC Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}

---

##### `policyText`<sup>Optional</sup> <a name="policyText" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText"></a>

```java
public java.lang.String getPolicyText();
```

- *Type:* java.lang.String

The policy definition containing the logic for your CC Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#policy_text ConfigConfigRule#policy_text}

---

### ConfigConfigRuleSourceSourceDetails <a name="ConfigConfigRuleSourceSourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleSourceSourceDetails;

ConfigConfigRuleSourceSourceDetails.builder()
//  .eventSource(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .messageType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.eventSource">eventSource</a></code> | <code>java.lang.String</code> | The source of the event, such as an AWS service, that triggers CC to evaluate your AWS resources. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | The frequency at which you want CC to run evaluations for a custom rule with a periodic trigger. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.messageType">messageType</a></code> | <code>java.lang.String</code> | The type of notification that triggers CC to run an evaluation for a rule. |

---

##### `eventSource`<sup>Optional</sup> <a name="eventSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.eventSource"></a>

```java
public java.lang.String getEventSource();
```

- *Type:* java.lang.String

The source of the event, such as an AWS service, that triggers CC to evaluate your AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#event_source ConfigConfigRule#event_source}

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

The frequency at which you want CC to run evaluations for a custom rule with a periodic trigger.

If you specify a value for `MaximumExecutionFrequency`, then `MessageType` must use the `ScheduledNotification` value.
By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
Based on the valid value you choose, CC runs evaluations once for each valid value. For example, if you choose `Three_Hours`, CC runs evaluations once every three hours. In this case, `Three_Hours` is the frequency of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}

---

##### `messageType`<sup>Optional</sup> <a name="messageType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

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

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleComplianceOutputReference;

new ConfigConfigRuleComplianceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleComplianceOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigRuleCompliance getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleCompliance">ConfigConfigRuleCompliance</a>

---


### ConfigConfigRuleEvaluationModesList <a name="ConfigConfigRuleEvaluationModesList" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleEvaluationModesList;

new ConfigConfigRuleEvaluationModesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.get"></a>

```java
public ConfigConfigRuleEvaluationModesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConfigConfigRuleEvaluationModes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>>

---


### ConfigConfigRuleEvaluationModesOutputReference <a name="ConfigConfigRuleEvaluationModesOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleEvaluationModesOutputReference;

new ConfigConfigRuleEvaluationModesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigRuleEvaluationModes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleEvaluationModes">ConfigConfigRuleEvaluationModes</a>

---


### ConfigConfigRuleScopeOutputReference <a name="ConfigConfigRuleScopeOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleScopeOutputReference;

new ConfigConfigRuleScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId">resetComplianceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes">resetComplianceResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComplianceResourceId` <a name="resetComplianceResourceId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId"></a>

```java
public void resetComplianceResourceId()
```

##### `resetComplianceResourceTypes` <a name="resetComplianceResourceTypes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes"></a>

```java
public void resetComplianceResourceTypes()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput">complianceResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput">complianceResourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId">complianceResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes">complianceResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `complianceResourceIdInput`<sup>Optional</sup> <a name="complianceResourceIdInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput"></a>

```java
public java.lang.String getComplianceResourceIdInput();
```

- *Type:* java.lang.String

---

##### `complianceResourceTypesInput`<sup>Optional</sup> <a name="complianceResourceTypesInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getComplianceResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `complianceResourceId`<sup>Required</sup> <a name="complianceResourceId" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId"></a>

```java
public java.lang.String getComplianceResourceId();
```

- *Type:* java.lang.String

---

##### `complianceResourceTypes`<sup>Required</sup> <a name="complianceResourceTypes" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes"></a>

```java
public java.util.List<java.lang.String> getComplianceResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigRuleScope getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---


### ConfigConfigRuleSourceCustomPolicyDetailsOutputReference <a name="ConfigConfigRuleSourceCustomPolicyDetailsOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference;

new ConfigConfigRuleSourceCustomPolicyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery">resetEnableDebugLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyRuntime">resetPolicyRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyText">resetPolicyText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableDebugLogDelivery` <a name="resetEnableDebugLogDelivery" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery"></a>

```java
public void resetEnableDebugLogDelivery()
```

##### `resetPolicyRuntime` <a name="resetPolicyRuntime" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyRuntime"></a>

```java
public void resetPolicyRuntime()
```

##### `resetPolicyText` <a name="resetPolicyText" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetPolicyText"></a>

```java
public void resetPolicyText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput">enableDebugLogDeliveryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput">policyRuntimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput">policyTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery">enableDebugLogDelivery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime">policyRuntime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText">policyText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableDebugLogDeliveryInput`<sup>Optional</sup> <a name="enableDebugLogDeliveryInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableDebugLogDeliveryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `policyRuntimeInput`<sup>Optional</sup> <a name="policyRuntimeInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput"></a>

```java
public java.lang.String getPolicyRuntimeInput();
```

- *Type:* java.lang.String

---

##### `policyTextInput`<sup>Optional</sup> <a name="policyTextInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput"></a>

```java
public java.lang.String getPolicyTextInput();
```

- *Type:* java.lang.String

---

##### `enableDebugLogDelivery`<sup>Required</sup> <a name="enableDebugLogDelivery" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery"></a>

```java
public java.lang.Boolean|IResolvable getEnableDebugLogDelivery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `policyRuntime`<sup>Required</sup> <a name="policyRuntime" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime"></a>

```java
public java.lang.String getPolicyRuntime();
```

- *Type:* java.lang.String

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText"></a>

```java
public java.lang.String getPolicyText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigRuleSourceCustomPolicyDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---


### ConfigConfigRuleSourceOutputReference <a name="ConfigConfigRuleSourceOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleSourceOutputReference;

new ConfigConfigRuleSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails">putCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetails">putSourceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails">resetCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetails">resetSourceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier">resetSourceIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPolicyDetails` <a name="putCustomPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails"></a>

```java
public void putCustomPolicyDetails(ConfigConfigRuleSourceCustomPolicyDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `putSourceDetails` <a name="putSourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetails"></a>

```java
public void putSourceDetails(IResolvable|java.util.List<ConfigConfigRuleSourceSourceDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>>

---

##### `resetCustomPolicyDetails` <a name="resetCustomPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails"></a>

```java
public void resetCustomPolicyDetails()
```

##### `resetSourceDetails` <a name="resetSourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetails"></a>

```java
public void resetSourceDetails()
```

##### `resetSourceIdentifier` <a name="resetSourceIdentifier" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier"></a>

```java
public void resetSourceIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails">customPolicyDetails</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetails">sourceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList">ConfigConfigRuleSourceSourceDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput">customPolicyDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailsInput">sourceDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput">sourceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier">sourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customPolicyDetails`<sup>Required</sup> <a name="customPolicyDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails"></a>

```java
public ConfigConfigRuleSourceCustomPolicyDetailsOutputReference getCustomPolicyDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a>

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetails"></a>

```java
public ConfigConfigRuleSourceSourceDetailsList getSourceDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList">ConfigConfigRuleSourceSourceDetailsList</a>

---

##### `customPolicyDetailsInput`<sup>Optional</sup> <a name="customPolicyDetailsInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput"></a>

```java
public IResolvable|ConfigConfigRuleSourceCustomPolicyDetails getCustomPolicyDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `sourceDetailsInput`<sup>Optional</sup> <a name="sourceDetailsInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailsInput"></a>

```java
public IResolvable|java.util.List<ConfigConfigRuleSourceSourceDetails> getSourceDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>>

---

##### `sourceIdentifierInput`<sup>Optional</sup> <a name="sourceIdentifierInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput"></a>

```java
public java.lang.String getSourceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `sourceIdentifier`<sup>Required</sup> <a name="sourceIdentifier" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier"></a>

```java
public java.lang.String getSourceIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigRuleSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---


### ConfigConfigRuleSourceSourceDetailsList <a name="ConfigConfigRuleSourceSourceDetailsList" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleSourceSourceDetailsList;

new ConfigConfigRuleSourceSourceDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.get"></a>

```java
public ConfigConfigRuleSourceSourceDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConfigConfigRuleSourceSourceDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>>

---


### ConfigConfigRuleSourceSourceDetailsOutputReference <a name="ConfigConfigRuleSourceSourceDetailsOutputReference" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_config_rule.ConfigConfigRuleSourceSourceDetailsOutputReference;

new ConfigConfigRuleSourceSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetEventSource">resetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMessageType">resetMessageType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventSource` <a name="resetEventSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetEventSource"></a>

```java
public void resetEventSource()
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMaximumExecutionFrequency"></a>

```java
public void resetMaximumExecutionFrequency()
```

##### `resetMessageType` <a name="resetMessageType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.resetMessageType"></a>

```java
public void resetMessageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSourceInput">eventSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageTypeInput">messageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSource">eventSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageType">messageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventSourceInput`<sup>Optional</sup> <a name="eventSourceInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSourceInput"></a>

```java
public java.lang.String getEventSourceInput();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequencyInput"></a>

```java
public java.lang.String getMaximumExecutionFrequencyInput();
```

- *Type:* java.lang.String

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageTypeInput"></a>

```java
public java.lang.String getMessageTypeInput();
```

- *Type:* java.lang.String

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.eventSource"></a>

```java
public java.lang.String getEventSource();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigRuleSourceSourceDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigRule.ConfigConfigRuleSourceSourceDetails">ConfigConfigRuleSourceSourceDetails</a>

---



