# `smsvoiceProtectConfiguration` Submodule <a name="`smsvoiceProtectConfiguration` Submodule" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceProtectConfiguration <a name="SmsvoiceProtectConfiguration" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration awscc_smsvoice_protect_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfiguration;

SmsvoiceProtectConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .countryRuleSet(SmsvoiceProtectConfigurationCountryRuleSet)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SmsvoiceProtectConfigurationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.countryRuleSet">countryRuleSet</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | An array of CountryRule containing the rules for the NumberCapability. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true deletion protection is enabled and protect configuration cannot be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `countryRuleSet`<sup>Optional</sup> <a name="countryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.countryRuleSet"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

An array of CountryRule containing the rules for the NumberCapability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#country_rule_set SmsvoiceProtectConfiguration#country_rule_set}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true deletion protection is enabled and protect configuration cannot be deleted.

By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#deletion_protection_enabled SmsvoiceProtectConfiguration#deletion_protection_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#tags SmsvoiceProtectConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet">putCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetCountryRuleSet">resetCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCountryRuleSet` <a name="putCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet"></a>

```java
public void putCountryRuleSet(SmsvoiceProtectConfigurationCountryRuleSet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SmsvoiceProtectConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>>

---

##### `resetCountryRuleSet` <a name="resetCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetCountryRuleSet"></a>

```java
public void resetCountryRuleSet()
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfiguration;

SmsvoiceProtectConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfiguration;

SmsvoiceProtectConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfiguration;

SmsvoiceProtectConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfiguration;

SmsvoiceProtectConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SmsvoiceProtectConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SmsvoiceProtectConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SmsvoiceProtectConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceProtectConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSet">countryRuleSet</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference">SmsvoiceProtectConfigurationCountryRuleSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.protectConfigurationId">protectConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList">SmsvoiceProtectConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSetInput">countryRuleSetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `countryRuleSet`<sup>Required</sup> <a name="countryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSet"></a>

```java
public SmsvoiceProtectConfigurationCountryRuleSetOutputReference getCountryRuleSet();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference">SmsvoiceProtectConfigurationCountryRuleSetOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `protectConfigurationId`<sup>Required</sup> <a name="protectConfigurationId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.protectConfigurationId"></a>

```java
public java.lang.String getProtectConfigurationId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tags"></a>

```java
public SmsvoiceProtectConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList">SmsvoiceProtectConfigurationTagsList</a>

---

##### `countryRuleSetInput`<sup>Optional</sup> <a name="countryRuleSetInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSetInput"></a>

```java
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSet getCountryRuleSetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceProtectConfigurationConfig <a name="SmsvoiceProtectConfigurationConfig" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationConfig;

SmsvoiceProtectConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .countryRuleSet(SmsvoiceProtectConfigurationCountryRuleSet)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SmsvoiceProtectConfigurationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.countryRuleSet">countryRuleSet</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | An array of CountryRule containing the rules for the NumberCapability. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true deletion protection is enabled and protect configuration cannot be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `countryRuleSet`<sup>Optional</sup> <a name="countryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.countryRuleSet"></a>

```java
public SmsvoiceProtectConfigurationCountryRuleSet getCountryRuleSet();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

An array of CountryRule containing the rules for the NumberCapability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#country_rule_set SmsvoiceProtectConfiguration#country_rule_set}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true deletion protection is enabled and protect configuration cannot be deleted.

By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#deletion_protection_enabled SmsvoiceProtectConfiguration#deletion_protection_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#tags SmsvoiceProtectConfiguration#tags}

---

### SmsvoiceProtectConfigurationCountryRuleSet <a name="SmsvoiceProtectConfigurationCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSet;

SmsvoiceProtectConfigurationCountryRuleSet.builder()
//  .mms(IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetMms>)
//  .sms(IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetSms>)
//  .voice(IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetVoice>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.mms">mms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#mms SmsvoiceProtectConfiguration#mms}. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.sms">sms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#sms SmsvoiceProtectConfiguration#sms}. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.voice">voice</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#voice SmsvoiceProtectConfiguration#voice}. |

---

##### `mms`<sup>Optional</sup> <a name="mms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.mms"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetMms> getMms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#mms SmsvoiceProtectConfiguration#mms}.

---

##### `sms`<sup>Optional</sup> <a name="sms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.sms"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetSms> getSms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#sms SmsvoiceProtectConfiguration#sms}.

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.voice"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetVoice> getVoice();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#voice SmsvoiceProtectConfiguration#voice}.

---

### SmsvoiceProtectConfigurationCountryRuleSetMms <a name="SmsvoiceProtectConfigurationCountryRuleSetMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSetMms;

SmsvoiceProtectConfigurationCountryRuleSetMms.builder()
//  .countryCode(java.lang.String)
//  .protectStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.protectStatus">protectStatus</a></code> | <code>java.lang.String</code> | The types of protection that can be used. |

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.protectStatus"></a>

```java
public java.lang.String getProtectStatus();
```

- *Type:* java.lang.String

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationCountryRuleSetSms <a name="SmsvoiceProtectConfigurationCountryRuleSetSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSetSms;

SmsvoiceProtectConfigurationCountryRuleSetSms.builder()
//  .countryCode(java.lang.String)
//  .protectStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.protectStatus">protectStatus</a></code> | <code>java.lang.String</code> | The types of protection that can be used. |

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.protectStatus"></a>

```java
public java.lang.String getProtectStatus();
```

- *Type:* java.lang.String

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationCountryRuleSetVoice <a name="SmsvoiceProtectConfigurationCountryRuleSetVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSetVoice;

SmsvoiceProtectConfigurationCountryRuleSetVoice.builder()
//  .countryCode(java.lang.String)
//  .protectStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.protectStatus">protectStatus</a></code> | <code>java.lang.String</code> | The types of protection that can be used. |

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.protectStatus"></a>

```java
public java.lang.String getProtectStatus();
```

- *Type:* java.lang.String

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationTags <a name="SmsvoiceProtectConfigurationTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationTags;

SmsvoiceProtectConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#key SmsvoiceProtectConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#value SmsvoiceProtectConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceProtectConfigurationCountryRuleSetMmsList <a name="SmsvoiceProtectConfigurationCountryRuleSetMmsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSetMmsList;

new SmsvoiceProtectConfigurationCountryRuleSetMmsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get"></a>

```java
public SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetMms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>>

---


### SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference;

new SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetProtectStatus">resetProtectStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetProtectStatus` <a name="resetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetProtectStatus"></a>

```java
public void resetProtectStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatusInput">protectStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus">protectStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `protectStatusInput`<sup>Optional</sup> <a name="protectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatusInput"></a>

```java
public java.lang.String getProtectStatusInput();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus"></a>

```java
public java.lang.String getProtectStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetMms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>

---


### SmsvoiceProtectConfigurationCountryRuleSetOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference;

new SmsvoiceProtectConfigurationCountryRuleSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms">putMms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms">putSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice">putVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetMms">resetMms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetSms">resetSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetVoice">resetVoice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMms` <a name="putMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms"></a>

```java
public void putMms(IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetMms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>>

---

##### `putSms` <a name="putSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms"></a>

```java
public void putSms(IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetSms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>>

---

##### `putVoice` <a name="putVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice"></a>

```java
public void putVoice(IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetVoice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>>

---

##### `resetMms` <a name="resetMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetMms"></a>

```java
public void resetMms()
```

##### `resetSms` <a name="resetSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetSms"></a>

```java
public void resetSms()
```

##### `resetVoice` <a name="resetVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetVoice"></a>

```java
public void resetVoice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms">mms</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList">SmsvoiceProtectConfigurationCountryRuleSetMmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms">sms</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList">SmsvoiceProtectConfigurationCountryRuleSetSmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList">SmsvoiceProtectConfigurationCountryRuleSetVoiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mmsInput">mmsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.smsInput">smsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voiceInput">voiceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mms`<sup>Required</sup> <a name="mms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms"></a>

```java
public SmsvoiceProtectConfigurationCountryRuleSetMmsList getMms();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList">SmsvoiceProtectConfigurationCountryRuleSetMmsList</a>

---

##### `sms`<sup>Required</sup> <a name="sms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms"></a>

```java
public SmsvoiceProtectConfigurationCountryRuleSetSmsList getSms();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList">SmsvoiceProtectConfigurationCountryRuleSetSmsList</a>

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice"></a>

```java
public SmsvoiceProtectConfigurationCountryRuleSetVoiceList getVoice();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList">SmsvoiceProtectConfigurationCountryRuleSetVoiceList</a>

---

##### `mmsInput`<sup>Optional</sup> <a name="mmsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mmsInput"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetMms> getMmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>>

---

##### `smsInput`<sup>Optional</sup> <a name="smsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.smsInput"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetSms> getSmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>>

---

##### `voiceInput`<sup>Optional</sup> <a name="voiceInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voiceInput"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetVoice> getVoiceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSet getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

---


### SmsvoiceProtectConfigurationCountryRuleSetSmsList <a name="SmsvoiceProtectConfigurationCountryRuleSetSmsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSetSmsList;

new SmsvoiceProtectConfigurationCountryRuleSetSmsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get"></a>

```java
public SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetSms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>>

---


### SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference;

new SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetProtectStatus">resetProtectStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetProtectStatus` <a name="resetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetProtectStatus"></a>

```java
public void resetProtectStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatusInput">protectStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus">protectStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `protectStatusInput`<sup>Optional</sup> <a name="protectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatusInput"></a>

```java
public java.lang.String getProtectStatusInput();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus"></a>

```java
public java.lang.String getProtectStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetSms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>

---


### SmsvoiceProtectConfigurationCountryRuleSetVoiceList <a name="SmsvoiceProtectConfigurationCountryRuleSetVoiceList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList;

new SmsvoiceProtectConfigurationCountryRuleSetVoiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get"></a>

```java
public SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationCountryRuleSetVoice> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>>

---


### SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference;

new SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetProtectStatus">resetProtectStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetProtectStatus` <a name="resetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetProtectStatus"></a>

```java
public void resetProtectStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatusInput">protectStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus">protectStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `protectStatusInput`<sup>Optional</sup> <a name="protectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatusInput"></a>

```java
public java.lang.String getProtectStatusInput();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus"></a>

```java
public java.lang.String getProtectStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceProtectConfigurationCountryRuleSetVoice getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>

---


### SmsvoiceProtectConfigurationTagsList <a name="SmsvoiceProtectConfigurationTagsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationTagsList;

new SmsvoiceProtectConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get"></a>

```java
public SmsvoiceProtectConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoiceProtectConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>>

---


### SmsvoiceProtectConfigurationTagsOutputReference <a name="SmsvoiceProtectConfigurationTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_protect_configuration.SmsvoiceProtectConfigurationTagsOutputReference;

new SmsvoiceProtectConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceProtectConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>

---



