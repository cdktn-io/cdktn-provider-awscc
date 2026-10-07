# `configOrganizationConfigRule` Submodule <a name="`configOrganizationConfigRule` Submodule" id="@cdktn/provider-awscc.configOrganizationConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationConfigRule <a name="ConfigOrganizationConfigRule" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule awscc_config_organization_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRule;

ConfigOrganizationConfigRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organizationConfigRuleName(java.lang.String)
//  .excludedAccounts(java.util.List<java.lang.String>)
//  .organizationCustomPolicyRuleMetadata(ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata)
//  .organizationCustomRuleMetadata(ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata)
//  .organizationManagedRuleMetadata(ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationConfigRuleName">organizationConfigRuleName</a></code> | <code>java.lang.String</code> | The name that you assign to an organization AWS Config rule. Required. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list of accounts that you want to exclude from an organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationCustomPolicyRuleMetadata">organizationCustomPolicyRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | This object specifies metadata for your organization's AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationCustomRuleMetadata">organizationCustomRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationManagedRuleMetadata">organizationManagedRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organizationConfigRuleName`<sup>Required</sup> <a name="organizationConfigRuleName" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationConfigRuleName"></a>

- *Type:* java.lang.String

The name that you assign to an organization AWS Config rule. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_name ConfigOrganizationConfigRule#organization_config_rule_name}

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.excludedAccounts"></a>

- *Type:* java.util.List<java.lang.String>

A comma-separated list of accounts that you want to exclude from an organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#excluded_accounts ConfigOrganizationConfigRule#excluded_accounts}

---

##### `organizationCustomPolicyRuleMetadata`<sup>Optional</sup> <a name="organizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationCustomPolicyRuleMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

This object specifies metadata for your organization's AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_policy_rule_metadata ConfigOrganizationConfigRule#organization_custom_policy_rule_metadata}

---

##### `organizationCustomRuleMetadata`<sup>Optional</sup> <a name="organizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationCustomRuleMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_rule_metadata ConfigOrganizationConfigRule#organization_custom_rule_metadata}

---

##### `organizationManagedRuleMetadata`<sup>Optional</sup> <a name="organizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.organizationManagedRuleMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_managed_rule_metadata ConfigOrganizationConfigRule#organization_managed_rule_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata">putOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata">putOrganizationCustomRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata">putOrganizationManagedRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomPolicyRuleMetadata">resetOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomRuleMetadata">resetOrganizationCustomRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationManagedRuleMetadata">resetOrganizationManagedRuleMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOrganizationCustomPolicyRuleMetadata` <a name="putOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata"></a>

```java
public void putOrganizationCustomPolicyRuleMetadata(ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---

##### `putOrganizationCustomRuleMetadata` <a name="putOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata"></a>

```java
public void putOrganizationCustomRuleMetadata(ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---

##### `putOrganizationManagedRuleMetadata` <a name="putOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata"></a>

```java
public void putOrganizationManagedRuleMetadata(ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetExcludedAccounts"></a>

```java
public void resetExcludedAccounts()
```

##### `resetOrganizationCustomPolicyRuleMetadata` <a name="resetOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomPolicyRuleMetadata"></a>

```java
public void resetOrganizationCustomPolicyRuleMetadata()
```

##### `resetOrganizationCustomRuleMetadata` <a name="resetOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomRuleMetadata"></a>

```java
public void resetOrganizationCustomRuleMetadata()
```

##### `resetOrganizationManagedRuleMetadata` <a name="resetOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationManagedRuleMetadata"></a>

```java
public void resetOrganizationManagedRuleMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRule;

ConfigOrganizationConfigRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRule;

ConfigOrganizationConfigRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRule;

ConfigOrganizationConfigRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRule;

ConfigOrganizationConfigRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigOrganizationConfigRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigOrganizationConfigRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigOrganizationConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleArn">organizationConfigRuleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata">organizationCustomPolicyRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadata">organizationCustomRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadata">organizationManagedRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleNameInput">organizationConfigRuleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadataInput">organizationCustomPolicyRuleMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadataInput">organizationCustomRuleMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadataInput">organizationManagedRuleMetadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleName">organizationConfigRuleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organizationConfigRuleArn`<sup>Required</sup> <a name="organizationConfigRuleArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleArn"></a>

```java
public java.lang.String getOrganizationConfigRuleArn();
```

- *Type:* java.lang.String

---

##### `organizationCustomPolicyRuleMetadata`<sup>Required</sup> <a name="organizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata"></a>

```java
public ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference getOrganizationCustomPolicyRuleMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a>

---

##### `organizationCustomRuleMetadata`<sup>Required</sup> <a name="organizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadata"></a>

```java
public ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference getOrganizationCustomRuleMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a>

---

##### `organizationManagedRuleMetadata`<sup>Required</sup> <a name="organizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadata"></a>

```java
public ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference getOrganizationManagedRuleMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a>

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationConfigRuleNameInput`<sup>Optional</sup> <a name="organizationConfigRuleNameInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleNameInput"></a>

```java
public java.lang.String getOrganizationConfigRuleNameInput();
```

- *Type:* java.lang.String

---

##### `organizationCustomPolicyRuleMetadataInput`<sup>Optional</sup> <a name="organizationCustomPolicyRuleMetadataInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadataInput"></a>

```java
public IResolvable|ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata getOrganizationCustomPolicyRuleMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---

##### `organizationCustomRuleMetadataInput`<sup>Optional</sup> <a name="organizationCustomRuleMetadataInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadataInput"></a>

```java
public IResolvable|ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata getOrganizationCustomRuleMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---

##### `organizationManagedRuleMetadataInput`<sup>Optional</sup> <a name="organizationManagedRuleMetadataInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadataInput"></a>

```java
public IResolvable|ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata getOrganizationManagedRuleMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationConfigRuleName`<sup>Required</sup> <a name="organizationConfigRuleName" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleName"></a>

```java
public java.lang.String getOrganizationConfigRuleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationConfigRuleConfig <a name="ConfigOrganizationConfigRuleConfig" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRuleConfig;

ConfigOrganizationConfigRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organizationConfigRuleName(java.lang.String)
//  .excludedAccounts(java.util.List<java.lang.String>)
//  .organizationCustomPolicyRuleMetadata(ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata)
//  .organizationCustomRuleMetadata(ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata)
//  .organizationManagedRuleMetadata(ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationConfigRuleName">organizationConfigRuleName</a></code> | <code>java.lang.String</code> | The name that you assign to an organization AWS Config rule. Required. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list of accounts that you want to exclude from an organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomPolicyRuleMetadata">organizationCustomPolicyRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | This object specifies metadata for your organization's AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomRuleMetadata">organizationCustomRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationManagedRuleMetadata">organizationManagedRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organizationConfigRuleName`<sup>Required</sup> <a name="organizationConfigRuleName" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationConfigRuleName"></a>

```java
public java.lang.String getOrganizationConfigRuleName();
```

- *Type:* java.lang.String

The name that you assign to an organization AWS Config rule. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_name ConfigOrganizationConfigRule#organization_config_rule_name}

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

A comma-separated list of accounts that you want to exclude from an organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#excluded_accounts ConfigOrganizationConfigRule#excluded_accounts}

---

##### `organizationCustomPolicyRuleMetadata`<sup>Optional</sup> <a name="organizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomPolicyRuleMetadata"></a>

```java
public ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata getOrganizationCustomPolicyRuleMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

This object specifies metadata for your organization's AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_policy_rule_metadata ConfigOrganizationConfigRule#organization_custom_policy_rule_metadata}

---

##### `organizationCustomRuleMetadata`<sup>Optional</sup> <a name="organizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomRuleMetadata"></a>

```java
public ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata getOrganizationCustomRuleMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_rule_metadata ConfigOrganizationConfigRule#organization_custom_rule_metadata}

---

##### `organizationManagedRuleMetadata`<sup>Optional</sup> <a name="organizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationManagedRuleMetadata"></a>

```java
public ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata getOrganizationManagedRuleMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_managed_rule_metadata ConfigOrganizationConfigRule#organization_managed_rule_metadata}

---

### ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata;

ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.builder()
//  .debugLogDeliveryAccounts(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .inputParameters(java.lang.String)
//  .organizationConfigRuleTriggerTypes(java.util.List<java.lang.String>)
//  .policyText(java.lang.String)
//  .resourceIdScope(java.lang.String)
//  .resourceTypesScope(java.util.List<java.lang.String>)
//  .runtime(java.lang.String)
//  .tagKeyScope(java.lang.String)
//  .tagValueScope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.description">description</a></code> | <code>java.lang.String</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.organizationConfigRuleTriggerTypes">organizationConfigRuleTriggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | The type of notification that initiates AWS Config to run an evaluation for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.policyText">policyText</a></code> | <code>java.lang.String</code> | The policy definition containing the logic for your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The runtime system for your organization AWS Config Custom Policy rules. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | The optional part of a key-value pair that make up a tag. |

---

##### `debugLogDeliveryAccounts`<sup>Optional</sup> <a name="debugLogDeliveryAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.debugLogDeliveryAccounts"></a>

```java
public java.util.List<java.lang.String> getDebugLogDeliveryAccounts();
```

- *Type:* java.util.List<java.lang.String>

A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#debug_log_delivery_accounts ConfigOrganizationConfigRule#debug_log_delivery_accounts}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `organizationConfigRuleTriggerTypes`<sup>Optional</sup> <a name="organizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.organizationConfigRuleTriggerTypes"></a>

```java
public java.util.List<java.lang.String> getOrganizationConfigRuleTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

The type of notification that initiates AWS Config to run an evaluation for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types ConfigOrganizationConfigRule#organization_config_rule_trigger_types}

---

##### `policyText`<sup>Optional</sup> <a name="policyText" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.policyText"></a>

```java
public java.lang.String getPolicyText();
```

- *Type:* java.lang.String

The policy definition containing the logic for your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#policy_text ConfigOrganizationConfigRule#policy_text}

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The runtime system for your organization AWS Config Custom Policy rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#runtime ConfigOrganizationConfigRule#runtime}

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

### ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata;

ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.builder()
//  .description(java.lang.String)
//  .inputParameters(java.lang.String)
//  .lambdaFunctionArn(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .organizationConfigRuleTriggerTypes(java.util.List<java.lang.String>)
//  .resourceIdScope(java.lang.String)
//  .resourceTypesScope(java.util.List<java.lang.String>)
//  .tagKeyScope(java.lang.String)
//  .tagValueScope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.description">description</a></code> | <code>java.lang.String</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | A string, in JSON format, that is passed to your organization AWS Config rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | The lambda function ARN. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour \| Three_Hours \| Six_Hours \| Twelve_Hours \| TwentyFour_Hours. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.organizationConfigRuleTriggerTypes">organizationConfigRuleTriggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | The type of notification that triggers AWS Config to run an evaluation for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | The optional part of a key-value pair that make up a tag. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `lambdaFunctionArn`<sup>Optional</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

The lambda function ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#lambda_function_arn ConfigOrganizationConfigRule#lambda_function_arn}

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#maximum_execution_frequency ConfigOrganizationConfigRule#maximum_execution_frequency}

---

##### `organizationConfigRuleTriggerTypes`<sup>Optional</sup> <a name="organizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.organizationConfigRuleTriggerTypes"></a>

```java
public java.util.List<java.lang.String> getOrganizationConfigRuleTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

The type of notification that triggers AWS Config to run an evaluation for a rule.

You can specify the following notification types:

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types ConfigOrganizationConfigRule#organization_config_rule_trigger_types}

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

### ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata;

ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.builder()
//  .description(java.lang.String)
//  .inputParameters(java.lang.String)
//  .maximumExecutionFrequency(java.lang.String)
//  .resourceIdScope(java.lang.String)
//  .resourceTypesScope(java.util.List<java.lang.String>)
//  .ruleIdentifier(java.lang.String)
//  .tagKeyScope(java.lang.String)
//  .tagValueScope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.description">description</a></code> | <code>java.lang.String</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | A string, in JSON format, that is passed to your organization AWS Config rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | The maximum frequency with which AWS Config runs evaluations for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.ruleIdentifier">ruleIdentifier</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | The optional part of a key-value pair that make up a tag. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

The maximum frequency with which AWS Config runs evaluations for a rule.

Valid Values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#maximum_execution_frequency ConfigOrganizationConfigRule#maximum_execution_frequency}

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `ruleIdentifier`<sup>Optional</sup> <a name="ruleIdentifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.ruleIdentifier"></a>

```java
public java.lang.String getRuleIdentifier();
```

- *Type:* java.lang.String

Required.

For organization config managed rules, a predefined identifier from a list. For example, IAM_PASSWORD_POLICY is a managed rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#rule_identifier ConfigOrganizationConfigRule#rule_identifier}

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference;

new ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDebugLogDeliveryAccounts">resetDebugLogDeliveryAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes">resetOrganizationConfigRuleTriggerTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetPolicyText">resetPolicyText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDebugLogDeliveryAccounts` <a name="resetDebugLogDeliveryAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDebugLogDeliveryAccounts"></a>

```java
public void resetDebugLogDeliveryAccounts()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetInputParameters"></a>

```java
public void resetInputParameters()
```

##### `resetOrganizationConfigRuleTriggerTypes` <a name="resetOrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes"></a>

```java
public void resetOrganizationConfigRuleTriggerTypes()
```

##### `resetPolicyText` <a name="resetPolicyText" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetPolicyText"></a>

```java
public void resetPolicyText()
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceIdScope"></a>

```java
public void resetResourceIdScope()
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceTypesScope"></a>

```java
public void resetResourceTypesScope()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagKeyScope"></a>

```java
public void resetTagKeyScope()
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagValueScope"></a>

```java
public void resetTagValueScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccountsInput">debugLogDeliveryAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParametersInput">inputParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput">organizationConfigRuleTriggerTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyTextInput">policyTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">organizationConfigRuleTriggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText">policyText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `debugLogDeliveryAccountsInput`<sup>Optional</sup> <a name="debugLogDeliveryAccountsInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccountsInput"></a>

```java
public java.util.List<java.lang.String> getDebugLogDeliveryAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParametersInput"></a>

```java
public java.lang.String getInputParametersInput();
```

- *Type:* java.lang.String

---

##### `organizationConfigRuleTriggerTypesInput`<sup>Optional</sup> <a name="organizationConfigRuleTriggerTypesInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput"></a>

```java
public java.util.List<java.lang.String> getOrganizationConfigRuleTriggerTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyTextInput`<sup>Optional</sup> <a name="policyTextInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyTextInput"></a>

```java
public java.lang.String getPolicyTextInput();
```

- *Type:* java.lang.String

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```java
public java.lang.String getResourceIdScopeInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```java
public java.lang.String getTagKeyScopeInput();
```

- *Type:* java.lang.String

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```java
public java.lang.String getTagValueScopeInput();
```

- *Type:* java.lang.String

---

##### `debugLogDeliveryAccounts`<sup>Required</sup> <a name="debugLogDeliveryAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts"></a>

```java
public java.util.List<java.lang.String> getDebugLogDeliveryAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

---

##### `organizationConfigRuleTriggerTypes`<sup>Required</sup> <a name="organizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```java
public java.util.List<java.lang.String> getOrganizationConfigRuleTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText"></a>

```java
public java.lang.String getPolicyText();
```

- *Type:* java.lang.String

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---


### ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference;

new ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetLambdaFunctionArn">resetLambdaFunctionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes">resetOrganizationConfigRuleTriggerTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetInputParameters"></a>

```java
public void resetInputParameters()
```

##### `resetLambdaFunctionArn` <a name="resetLambdaFunctionArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetLambdaFunctionArn"></a>

```java
public void resetLambdaFunctionArn()
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetMaximumExecutionFrequency"></a>

```java
public void resetMaximumExecutionFrequency()
```

##### `resetOrganizationConfigRuleTriggerTypes` <a name="resetOrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes"></a>

```java
public void resetOrganizationConfigRuleTriggerTypes()
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceIdScope"></a>

```java
public void resetResourceIdScope()
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceTypesScope"></a>

```java
public void resetResourceTypesScope()
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagKeyScope"></a>

```java
public void resetTagKeyScope()
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagValueScope"></a>

```java
public void resetTagValueScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParametersInput">inputParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArnInput">lambdaFunctionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput">organizationConfigRuleTriggerTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">organizationConfigRuleTriggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParametersInput"></a>

```java
public java.lang.String getInputParametersInput();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionArnInput`<sup>Optional</sup> <a name="lambdaFunctionArnInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArnInput"></a>

```java
public java.lang.String getLambdaFunctionArnInput();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequencyInput"></a>

```java
public java.lang.String getMaximumExecutionFrequencyInput();
```

- *Type:* java.lang.String

---

##### `organizationConfigRuleTriggerTypesInput`<sup>Optional</sup> <a name="organizationConfigRuleTriggerTypesInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput"></a>

```java
public java.util.List<java.lang.String> getOrganizationConfigRuleTriggerTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```java
public java.lang.String getResourceIdScopeInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```java
public java.lang.String getTagKeyScopeInput();
```

- *Type:* java.lang.String

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```java
public java.lang.String getTagValueScopeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

---

##### `organizationConfigRuleTriggerTypes`<sup>Required</sup> <a name="organizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```java
public java.util.List<java.lang.String> getOrganizationConfigRuleTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---


### ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_config_rule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference;

new ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetRuleIdentifier">resetRuleIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetInputParameters"></a>

```java
public void resetInputParameters()
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetMaximumExecutionFrequency"></a>

```java
public void resetMaximumExecutionFrequency()
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceIdScope"></a>

```java
public void resetResourceIdScope()
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceTypesScope"></a>

```java
public void resetResourceTypesScope()
```

##### `resetRuleIdentifier` <a name="resetRuleIdentifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetRuleIdentifier"></a>

```java
public void resetRuleIdentifier()
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagKeyScope"></a>

```java
public void resetTagKeyScope()
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagValueScope"></a>

```java
public void resetTagValueScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParametersInput">inputParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifierInput">ruleIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters">inputParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope">resourceIdScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope">resourceTypesScope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier">ruleIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope">tagKeyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope">tagValueScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParametersInput"></a>

```java
public java.lang.String getInputParametersInput();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequencyInput"></a>

```java
public java.lang.String getMaximumExecutionFrequencyInput();
```

- *Type:* java.lang.String

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```java
public java.lang.String getResourceIdScopeInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScopeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleIdentifierInput`<sup>Optional</sup> <a name="ruleIdentifierInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifierInput"></a>

```java
public java.lang.String getRuleIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```java
public java.lang.String getTagKeyScopeInput();
```

- *Type:* java.lang.String

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```java
public java.lang.String getTagValueScopeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters"></a>

```java
public java.lang.String getInputParameters();
```

- *Type:* java.lang.String

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```java
public java.lang.String getMaximumExecutionFrequency();
```

- *Type:* java.lang.String

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope"></a>

```java
public java.lang.String getResourceIdScope();
```

- *Type:* java.lang.String

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope"></a>

```java
public java.util.List<java.lang.String> getResourceTypesScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleIdentifier`<sup>Required</sup> <a name="ruleIdentifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier"></a>

```java
public java.lang.String getRuleIdentifier();
```

- *Type:* java.lang.String

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope"></a>

```java
public java.lang.String getTagKeyScope();
```

- *Type:* java.lang.String

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope"></a>

```java
public java.lang.String getTagValueScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---



