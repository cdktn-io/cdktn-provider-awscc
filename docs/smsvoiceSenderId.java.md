# `smsvoiceSenderId` Submodule <a name="`smsvoiceSenderId` Submodule" id="@cdktn/provider-awscc.smsvoiceSenderId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceSenderId <a name="SmsvoiceSenderId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id awscc_smsvoice_sender_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_sender_id.SmsvoiceSenderId;

SmsvoiceSenderId.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .isoCountryCode(java.lang.String)
    .senderId(java.lang.String)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SmsvoiceSenderIdTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.isoCountryCode">isoCountryCode</a></code> | <code>java.lang.String</code> | The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.senderId">senderId</a></code> | <code>java.lang.String</code> | The sender ID string to request. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true the sender ID can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.isoCountryCode"></a>

- *Type:* java.lang.String

The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#iso_country_code SmsvoiceSenderId#iso_country_code}

---

##### `senderId`<sup>Required</sup> <a name="senderId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.senderId"></a>

- *Type:* java.lang.String

The sender ID string to request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#sender_id SmsvoiceSenderId#sender_id}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true the sender ID can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#deletion_protection_enabled SmsvoiceSenderId#deletion_protection_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#tags SmsvoiceSenderId#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SmsvoiceSenderIdTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a>>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceSenderId resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.isConstruct"></a>

```java
import io.cdktn.providers.awscc.smsvoice_sender_id.SmsvoiceSenderId;

SmsvoiceSenderId.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.smsvoice_sender_id.SmsvoiceSenderId;

SmsvoiceSenderId.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.smsvoice_sender_id.SmsvoiceSenderId;

SmsvoiceSenderId.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.smsvoice_sender_id.SmsvoiceSenderId;

SmsvoiceSenderId.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SmsvoiceSenderId.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SmsvoiceSenderId resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SmsvoiceSenderId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SmsvoiceSenderId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceSenderId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList">SmsvoiceSenderIdTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.isoCountryCodeInput">isoCountryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.senderIdInput">senderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.isoCountryCode">isoCountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.senderId">senderId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.tags"></a>

```java
public SmsvoiceSenderIdTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList">SmsvoiceSenderIdTagsList</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isoCountryCodeInput`<sup>Optional</sup> <a name="isoCountryCodeInput" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.isoCountryCodeInput"></a>

```java
public java.lang.String getIsoCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `senderIdInput`<sup>Optional</sup> <a name="senderIdInput" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.senderIdInput"></a>

```java
public java.lang.String getSenderIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SmsvoiceSenderIdTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a>>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.isoCountryCode"></a>

```java
public java.lang.String getIsoCountryCode();
```

- *Type:* java.lang.String

---

##### `senderId`<sup>Required</sup> <a name="senderId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.senderId"></a>

```java
public java.lang.String getSenderId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderId.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceSenderIdConfig <a name="SmsvoiceSenderIdConfig" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_sender_id.SmsvoiceSenderIdConfig;

SmsvoiceSenderIdConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .isoCountryCode(java.lang.String)
    .senderId(java.lang.String)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SmsvoiceSenderIdTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.isoCountryCode">isoCountryCode</a></code> | <code>java.lang.String</code> | The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.senderId">senderId</a></code> | <code>java.lang.String</code> | The sender ID string to request. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true the sender ID can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.isoCountryCode"></a>

```java
public java.lang.String getIsoCountryCode();
```

- *Type:* java.lang.String

The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#iso_country_code SmsvoiceSenderId#iso_country_code}

---

##### `senderId`<sup>Required</sup> <a name="senderId" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.senderId"></a>

```java
public java.lang.String getSenderId();
```

- *Type:* java.lang.String

The sender ID string to request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#sender_id SmsvoiceSenderId#sender_id}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true the sender ID can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#deletion_protection_enabled SmsvoiceSenderId#deletion_protection_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SmsvoiceSenderIdTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#tags SmsvoiceSenderId#tags}

---

### SmsvoiceSenderIdTags <a name="SmsvoiceSenderIdTags" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_sender_id.SmsvoiceSenderIdTags;

SmsvoiceSenderIdTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#key SmsvoiceSenderId#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_sender_id#value SmsvoiceSenderId#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceSenderIdTagsList <a name="SmsvoiceSenderIdTagsList" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_sender_id.SmsvoiceSenderIdTagsList;

new SmsvoiceSenderIdTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.get"></a>

```java
public SmsvoiceSenderIdTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoiceSenderIdTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a>>

---


### SmsvoiceSenderIdTagsOutputReference <a name="SmsvoiceSenderIdTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_sender_id.SmsvoiceSenderIdTagsOutputReference;

new SmsvoiceSenderIdTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceSenderIdTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceSenderId.SmsvoiceSenderIdTags">SmsvoiceSenderIdTags</a>

---



