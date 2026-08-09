# `notificationscontactsEmailContact` Submodule <a name="`notificationscontactsEmailContact` Submodule" id="@cdktn/provider-awscc.notificationscontactsEmailContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationscontactsEmailContact <a name="NotificationscontactsEmailContact" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact awscc_notificationscontacts_email_contact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContact;

NotificationscontactsEmailContact.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .emailAddress(java.lang.String)
    .name(java.lang.String)
//  .tags(IResolvable|java.util.List<NotificationscontactsEmailContactTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>></code> | A list of tags that are attached to the role. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.emailAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>>

A list of tags that are attached to the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#tags NotificationscontactsEmailContact#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NotificationscontactsEmailContactTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationscontactsEmailContact resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContact;

NotificationscontactsEmailContact.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContact;

NotificationscontactsEmailContact.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContact;

NotificationscontactsEmailContact.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContact;

NotificationscontactsEmailContact.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NotificationscontactsEmailContact.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NotificationscontactsEmailContact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NotificationscontactsEmailContact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NotificationscontactsEmailContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NotificationscontactsEmailContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailContact">emailContact</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference">NotificationscontactsEmailContactEmailContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList">NotificationscontactsEmailContactTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `emailContact`<sup>Required</sup> <a name="emailContact" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailContact"></a>

```java
public NotificationscontactsEmailContactEmailContactOutputReference getEmailContact();
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference">NotificationscontactsEmailContactEmailContactOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tags"></a>

```java
public NotificationscontactsEmailContactTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList">NotificationscontactsEmailContactTagsList</a>

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NotificationscontactsEmailContactTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>>

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationscontactsEmailContactConfig <a name="NotificationscontactsEmailContactConfig" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContactConfig;

NotificationscontactsEmailContactConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .emailAddress(java.lang.String)
    .name(java.lang.String)
//  .tags(IResolvable|java.util.List<NotificationscontactsEmailContactTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>></code> | A list of tags that are attached to the role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.tags"></a>

```java
public IResolvable|java.util.List<NotificationscontactsEmailContactTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>>

A list of tags that are attached to the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#tags NotificationscontactsEmailContact#tags}

---

### NotificationscontactsEmailContactEmailContact <a name="NotificationscontactsEmailContactEmailContact" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact.Initializer"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContactEmailContact;

NotificationscontactsEmailContactEmailContact.builder()
    .build();
```


### NotificationscontactsEmailContactTags <a name="NotificationscontactsEmailContactTags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContactTags;

NotificationscontactsEmailContactTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#key NotificationscontactsEmailContact#key}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#value NotificationscontactsEmailContact#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#key NotificationscontactsEmailContact#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#value NotificationscontactsEmailContact#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationscontactsEmailContactEmailContactOutputReference <a name="NotificationscontactsEmailContactEmailContactOutputReference" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContactEmailContactOutputReference;

new NotificationscontactsEmailContactEmailContactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact">NotificationscontactsEmailContactEmailContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.internalValue"></a>

```java
public NotificationscontactsEmailContactEmailContact getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact">NotificationscontactsEmailContactEmailContact</a>

---


### NotificationscontactsEmailContactTagsList <a name="NotificationscontactsEmailContactTagsList" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContactTagsList;

new NotificationscontactsEmailContactTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.get"></a>

```java
public NotificationscontactsEmailContactTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NotificationscontactsEmailContactTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>>

---


### NotificationscontactsEmailContactTagsOutputReference <a name="NotificationscontactsEmailContactTagsOutputReference" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.notificationscontacts_email_contact.NotificationscontactsEmailContactTagsOutputReference;

new NotificationscontactsEmailContactTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NotificationscontactsEmailContactTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>

---



