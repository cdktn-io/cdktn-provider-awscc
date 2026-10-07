# `smsvoiceNotifyConfiguration` Submodule <a name="`smsvoiceNotifyConfiguration` Submodule" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceNotifyConfiguration <a name="SmsvoiceNotifyConfiguration" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration awscc_smsvoice_notify_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_notify_configuration.SmsvoiceNotifyConfiguration;

SmsvoiceNotifyConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .enabledChannels(java.util.List<java.lang.String>)
    .useCase(java.lang.String)
//  .defaultTemplateId(java.lang.String)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .enabledCountries(java.util.List<java.lang.String>)
//  .poolId(java.lang.String)
//  .tags(IResolvable|java.util.List<SmsvoiceNotifyConfigurationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.enabledChannels">enabledChannels</a></code> | <code>java.util.List<java.lang.String></code> | An array of channels to enable for the notify configuration. Supported values include SMS and VOICE. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.useCase">useCase</a></code> | <code>java.lang.String</code> | The use case for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.defaultTemplateId">defaultTemplateId</a></code> | <code>java.lang.String</code> | The default template identifier to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default this is set to false. When set to true the notify configuration can't be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.enabledCountries">enabledCountries</a></code> | <code>java.util.List<java.lang.String></code> | An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.poolId">poolId</a></code> | <code>java.lang.String</code> | The identifier of the pool to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>></code> | An array of tags (key and value pairs) associated with the notify configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#display_name SmsvoiceNotifyConfiguration#display_name}

---

##### `enabledChannels`<sup>Required</sup> <a name="enabledChannels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.enabledChannels"></a>

- *Type:* java.util.List<java.lang.String>

An array of channels to enable for the notify configuration. Supported values include SMS and VOICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_channels SmsvoiceNotifyConfiguration#enabled_channels}

---

##### `useCase`<sup>Required</sup> <a name="useCase" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.useCase"></a>

- *Type:* java.lang.String

The use case for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#use_case SmsvoiceNotifyConfiguration#use_case}

---

##### `defaultTemplateId`<sup>Optional</sup> <a name="defaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.defaultTemplateId"></a>

- *Type:* java.lang.String

The default template identifier to associate with the notify configuration.

If specified, this template is used when sending messages without an explicit template identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#default_template_id SmsvoiceNotifyConfiguration#default_template_id}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default this is set to false. When set to true the notify configuration can't be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#deletion_protection_enabled SmsvoiceNotifyConfiguration#deletion_protection_enabled}

---

##### `enabledCountries`<sup>Optional</sup> <a name="enabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.enabledCountries"></a>

- *Type:* java.util.List<java.lang.String>

An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_countries SmsvoiceNotifyConfiguration#enabled_countries}

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.poolId"></a>

- *Type:* java.lang.String

The identifier of the pool to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#pool_id SmsvoiceNotifyConfiguration#pool_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>>

An array of tags (key and value pairs) associated with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#tags SmsvoiceNotifyConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDefaultTemplateId">resetDefaultTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetEnabledCountries">resetEnabledCountries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetPoolId">resetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SmsvoiceNotifyConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>>

---

##### `resetDefaultTemplateId` <a name="resetDefaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDefaultTemplateId"></a>

```java
public void resetDefaultTemplateId()
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetEnabledCountries` <a name="resetEnabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetEnabledCountries"></a>

```java
public void resetEnabledCountries()
```

##### `resetPoolId` <a name="resetPoolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetPoolId"></a>

```java
public void resetPoolId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceNotifyConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.smsvoice_notify_configuration.SmsvoiceNotifyConfiguration;

SmsvoiceNotifyConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.smsvoice_notify_configuration.SmsvoiceNotifyConfiguration;

SmsvoiceNotifyConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.smsvoice_notify_configuration.SmsvoiceNotifyConfiguration;

SmsvoiceNotifyConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.smsvoice_notify_configuration.SmsvoiceNotifyConfiguration;

SmsvoiceNotifyConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SmsvoiceNotifyConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SmsvoiceNotifyConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SmsvoiceNotifyConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SmsvoiceNotifyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceNotifyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationArn">notifyConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationId">notifyConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList">SmsvoiceNotifyConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tierUpgradeStatus">tierUpgradeStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateIdInput">defaultTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannelsInput">enabledChannelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountriesInput">enabledCountriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolIdInput">poolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCaseInput">useCaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateId">defaultTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannels">enabledChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountries">enabledCountries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolId">poolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCase">useCase</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notifyConfigurationArn`<sup>Required</sup> <a name="notifyConfigurationArn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationArn"></a>

```java
public java.lang.String getNotifyConfigurationArn();
```

- *Type:* java.lang.String

---

##### `notifyConfigurationId`<sup>Required</sup> <a name="notifyConfigurationId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationId"></a>

```java
public java.lang.String getNotifyConfigurationId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tags"></a>

```java
public SmsvoiceNotifyConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList">SmsvoiceNotifyConfigurationTagsList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `tierUpgradeStatus`<sup>Required</sup> <a name="tierUpgradeStatus" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tierUpgradeStatus"></a>

```java
public java.lang.String getTierUpgradeStatus();
```

- *Type:* java.lang.String

---

##### `defaultTemplateIdInput`<sup>Optional</sup> <a name="defaultTemplateIdInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateIdInput"></a>

```java
public java.lang.String getDefaultTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledChannelsInput`<sup>Optional</sup> <a name="enabledChannelsInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannelsInput"></a>

```java
public java.util.List<java.lang.String> getEnabledChannelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledCountriesInput`<sup>Optional</sup> <a name="enabledCountriesInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountriesInput"></a>

```java
public java.util.List<java.lang.String> getEnabledCountriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolIdInput"></a>

```java
public java.lang.String getPoolIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SmsvoiceNotifyConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>>

---

##### `useCaseInput`<sup>Optional</sup> <a name="useCaseInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCaseInput"></a>

```java
public java.lang.String getUseCaseInput();
```

- *Type:* java.lang.String

---

##### `defaultTemplateId`<sup>Required</sup> <a name="defaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateId"></a>

```java
public java.lang.String getDefaultTemplateId();
```

- *Type:* java.lang.String

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabledChannels`<sup>Required</sup> <a name="enabledChannels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannels"></a>

```java
public java.util.List<java.lang.String> getEnabledChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledCountries`<sup>Required</sup> <a name="enabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountries"></a>

```java
public java.util.List<java.lang.String> getEnabledCountries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

---

##### `useCase`<sup>Required</sup> <a name="useCase" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCase"></a>

```java
public java.lang.String getUseCase();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceNotifyConfigurationConfig <a name="SmsvoiceNotifyConfigurationConfig" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_notify_configuration.SmsvoiceNotifyConfigurationConfig;

SmsvoiceNotifyConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .enabledChannels(java.util.List<java.lang.String>)
    .useCase(java.lang.String)
//  .defaultTemplateId(java.lang.String)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .enabledCountries(java.util.List<java.lang.String>)
//  .poolId(java.lang.String)
//  .tags(IResolvable|java.util.List<SmsvoiceNotifyConfigurationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledChannels">enabledChannels</a></code> | <code>java.util.List<java.lang.String></code> | An array of channels to enable for the notify configuration. Supported values include SMS and VOICE. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.useCase">useCase</a></code> | <code>java.lang.String</code> | The use case for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.defaultTemplateId">defaultTemplateId</a></code> | <code>java.lang.String</code> | The default template identifier to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default this is set to false. When set to true the notify configuration can't be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledCountries">enabledCountries</a></code> | <code>java.util.List<java.lang.String></code> | An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.poolId">poolId</a></code> | <code>java.lang.String</code> | The identifier of the pool to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>></code> | An array of tags (key and value pairs) associated with the notify configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#display_name SmsvoiceNotifyConfiguration#display_name}

---

##### `enabledChannels`<sup>Required</sup> <a name="enabledChannels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledChannels"></a>

```java
public java.util.List<java.lang.String> getEnabledChannels();
```

- *Type:* java.util.List<java.lang.String>

An array of channels to enable for the notify configuration. Supported values include SMS and VOICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_channels SmsvoiceNotifyConfiguration#enabled_channels}

---

##### `useCase`<sup>Required</sup> <a name="useCase" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.useCase"></a>

```java
public java.lang.String getUseCase();
```

- *Type:* java.lang.String

The use case for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#use_case SmsvoiceNotifyConfiguration#use_case}

---

##### `defaultTemplateId`<sup>Optional</sup> <a name="defaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.defaultTemplateId"></a>

```java
public java.lang.String getDefaultTemplateId();
```

- *Type:* java.lang.String

The default template identifier to associate with the notify configuration.

If specified, this template is used when sending messages without an explicit template identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#default_template_id SmsvoiceNotifyConfiguration#default_template_id}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default this is set to false. When set to true the notify configuration can't be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#deletion_protection_enabled SmsvoiceNotifyConfiguration#deletion_protection_enabled}

---

##### `enabledCountries`<sup>Optional</sup> <a name="enabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledCountries"></a>

```java
public java.util.List<java.lang.String> getEnabledCountries();
```

- *Type:* java.util.List<java.lang.String>

An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_countries SmsvoiceNotifyConfiguration#enabled_countries}

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

The identifier of the pool to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#pool_id SmsvoiceNotifyConfiguration#pool_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SmsvoiceNotifyConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>>

An array of tags (key and value pairs) associated with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#tags SmsvoiceNotifyConfiguration#tags}

---

### SmsvoiceNotifyConfigurationTags <a name="SmsvoiceNotifyConfigurationTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_notify_configuration.SmsvoiceNotifyConfigurationTags;

SmsvoiceNotifyConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | The string value associated with the key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#key SmsvoiceNotifyConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#value SmsvoiceNotifyConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceNotifyConfigurationTagsList <a name="SmsvoiceNotifyConfigurationTagsList" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_notify_configuration.SmsvoiceNotifyConfigurationTagsList;

new SmsvoiceNotifyConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get"></a>

```java
public SmsvoiceNotifyConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoiceNotifyConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>>

---


### SmsvoiceNotifyConfigurationTagsOutputReference <a name="SmsvoiceNotifyConfigurationTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_notify_configuration.SmsvoiceNotifyConfigurationTagsOutputReference;

new SmsvoiceNotifyConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceNotifyConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags">SmsvoiceNotifyConfigurationTags</a>

---



