# `connectNotification` Submodule <a name="`connectNotification` Submodule" id="@cdktn/provider-awscc.connectNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectNotification <a name="ConnectNotification" id="@cdktn/provider-awscc.connectNotification.ConnectNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification awscc_connect_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotification;

ConnectNotification.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(ConnectNotificationContent)
    .instanceArn(java.lang.String)
//  .expiresAt(java.lang.String)
//  .priority(java.lang.String)
//  .recipients(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ConnectNotificationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | The content of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | The time a notification will expire. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.priority">priority</a></code> | <code>java.lang.String</code> | The priority of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | The recipients of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>></code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

The content of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#content ConnectNotification#content}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#instance_arn ConnectNotification#instance_arn}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.expiresAt"></a>

- *Type:* java.lang.String

The time a notification will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#expires_at ConnectNotification#expires_at}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.priority"></a>

- *Type:* java.lang.String

The priority of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#priority ConnectNotification#priority}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.recipients"></a>

- *Type:* java.util.List<java.lang.String>

The recipients of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#recipients ConnectNotification#recipients}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#tags ConnectNotification#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetRecipients">resetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent"></a>

```java
public void putContent(ConnectNotificationContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConnectNotificationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>>

---

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetExpiresAt"></a>

```java
public void resetExpiresAt()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetRecipients"></a>

```java
public void resetRecipients()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectNotification resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotification;

ConnectNotification.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotification;

ConnectNotification.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotification;

ConnectNotification.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotification;

ConnectNotification.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectNotification.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference">ConnectNotificationContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.notificationId">notificationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList">ConnectNotificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.contentInput">contentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAtInput">expiresAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipientsInput">recipientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.content"></a>

```java
public ConnectNotificationContentOutputReference getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference">ConnectNotificationContentOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationId`<sup>Required</sup> <a name="notificationId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.notificationId"></a>

```java
public java.lang.String getNotificationId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tags"></a>

```java
public ConnectNotificationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList">ConnectNotificationTagsList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.contentInput"></a>

```java
public IResolvable|ConnectNotificationContent getContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAtInput"></a>

```java
public java.lang.String getExpiresAtInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipientsInput"></a>

```java
public java.util.List<java.lang.String> getRecipientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConnectNotificationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>>

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipients"></a>

```java
public java.util.List<java.lang.String> getRecipients();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectNotificationConfig <a name="ConnectNotificationConfig" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotificationConfig;

ConnectNotificationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(ConnectNotificationContent)
    .instanceArn(java.lang.String)
//  .expiresAt(java.lang.String)
//  .priority(java.lang.String)
//  .recipients(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ConnectNotificationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | The content of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | The time a notification will expire. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.priority">priority</a></code> | <code>java.lang.String</code> | The priority of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.recipients">recipients</a></code> | <code>java.util.List<java.lang.String></code> | The recipients of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>></code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.content"></a>

```java
public ConnectNotificationContent getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

The content of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#content ConnectNotification#content}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#instance_arn ConnectNotification#instance_arn}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

The time a notification will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#expires_at ConnectNotification#expires_at}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

The priority of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#priority ConnectNotification#priority}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.recipients"></a>

```java
public java.util.List<java.lang.String> getRecipients();
```

- *Type:* java.util.List<java.lang.String>

The recipients of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#recipients ConnectNotification#recipients}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConnectNotificationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#tags ConnectNotification#tags}

---

### ConnectNotificationContent <a name="ConnectNotificationContent" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotificationContent;

ConnectNotificationContent.builder()
//  .deDe(java.lang.String)
//  .enUs(java.lang.String)
//  .esEs(java.lang.String)
//  .frFr(java.lang.String)
//  .idId(java.lang.String)
//  .itIt(java.lang.String)
//  .jaJp(java.lang.String)
//  .koKr(java.lang.String)
//  .ptBr(java.lang.String)
//  .zhCn(java.lang.String)
//  .zhTw(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.deDe">deDe</a></code> | <code>java.lang.String</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.enUs">enUs</a></code> | <code>java.lang.String</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.esEs">esEs</a></code> | <code>java.lang.String</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.frFr">frFr</a></code> | <code>java.lang.String</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.idId">idId</a></code> | <code>java.lang.String</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.itIt">itIt</a></code> | <code>java.lang.String</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.jaJp">jaJp</a></code> | <code>java.lang.String</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.koKr">koKr</a></code> | <code>java.lang.String</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.ptBr">ptBr</a></code> | <code>java.lang.String</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhCn">zhCn</a></code> | <code>java.lang.String</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhTw">zhTw</a></code> | <code>java.lang.String</code> | Localized notification content. |

---

##### `deDe`<sup>Optional</sup> <a name="deDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.deDe"></a>

```java
public java.lang.String getDeDe();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#de_de ConnectNotification#de_de}

---

##### `enUs`<sup>Optional</sup> <a name="enUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.enUs"></a>

```java
public java.lang.String getEnUs();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#en_us ConnectNotification#en_us}

---

##### `esEs`<sup>Optional</sup> <a name="esEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.esEs"></a>

```java
public java.lang.String getEsEs();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#es_es ConnectNotification#es_es}

---

##### `frFr`<sup>Optional</sup> <a name="frFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.frFr"></a>

```java
public java.lang.String getFrFr();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#fr_fr ConnectNotification#fr_fr}

---

##### `idId`<sup>Optional</sup> <a name="idId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.idId"></a>

```java
public java.lang.String getIdId();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#id_id ConnectNotification#id_id}

---

##### `itIt`<sup>Optional</sup> <a name="itIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.itIt"></a>

```java
public java.lang.String getItIt();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#it_it ConnectNotification#it_it}

---

##### `jaJp`<sup>Optional</sup> <a name="jaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.jaJp"></a>

```java
public java.lang.String getJaJp();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#ja_jp ConnectNotification#ja_jp}

---

##### `koKr`<sup>Optional</sup> <a name="koKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.koKr"></a>

```java
public java.lang.String getKoKr();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#ko_kr ConnectNotification#ko_kr}

---

##### `ptBr`<sup>Optional</sup> <a name="ptBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.ptBr"></a>

```java
public java.lang.String getPtBr();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#pt_br ConnectNotification#pt_br}

---

##### `zhCn`<sup>Optional</sup> <a name="zhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhCn"></a>

```java
public java.lang.String getZhCn();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#zh_cn ConnectNotification#zh_cn}

---

##### `zhTw`<sup>Optional</sup> <a name="zhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhTw"></a>

```java
public java.lang.String getZhTw();
```

- *Type:* java.lang.String

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#zh_tw ConnectNotification#zh_tw}

---

### ConnectNotificationTags <a name="ConnectNotificationTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotificationTags;

ConnectNotificationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#key ConnectNotification#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#value ConnectNotification#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectNotificationContentOutputReference <a name="ConnectNotificationContentOutputReference" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotificationContentOutputReference;

new ConnectNotificationContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetDeDe">resetDeDe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEnUs">resetEnUs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEsEs">resetEsEs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetFrFr">resetFrFr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetIdId">resetIdId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetItIt">resetItIt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetJaJp">resetJaJp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetKoKr">resetKoKr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetPtBr">resetPtBr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhCn">resetZhCn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhTw">resetZhTw</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeDe` <a name="resetDeDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetDeDe"></a>

```java
public void resetDeDe()
```

##### `resetEnUs` <a name="resetEnUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEnUs"></a>

```java
public void resetEnUs()
```

##### `resetEsEs` <a name="resetEsEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEsEs"></a>

```java
public void resetEsEs()
```

##### `resetFrFr` <a name="resetFrFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetFrFr"></a>

```java
public void resetFrFr()
```

##### `resetIdId` <a name="resetIdId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetIdId"></a>

```java
public void resetIdId()
```

##### `resetItIt` <a name="resetItIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetItIt"></a>

```java
public void resetItIt()
```

##### `resetJaJp` <a name="resetJaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetJaJp"></a>

```java
public void resetJaJp()
```

##### `resetKoKr` <a name="resetKoKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetKoKr"></a>

```java
public void resetKoKr()
```

##### `resetPtBr` <a name="resetPtBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetPtBr"></a>

```java
public void resetPtBr()
```

##### `resetZhCn` <a name="resetZhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhCn"></a>

```java
public void resetZhCn()
```

##### `resetZhTw` <a name="resetZhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhTw"></a>

```java
public void resetZhTw()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDeInput">deDeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUsInput">enUsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEsInput">esEsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFrInput">frFrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idIdInput">idIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itItInput">itItInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJpInput">jaJpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKrInput">koKrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBrInput">ptBrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCnInput">zhCnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTwInput">zhTwInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDe">deDe</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUs">enUs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEs">esEs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFr">frFr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idId">idId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itIt">itIt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJp">jaJp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKr">koKr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBr">ptBr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCn">zhCn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTw">zhTw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deDeInput`<sup>Optional</sup> <a name="deDeInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDeInput"></a>

```java
public java.lang.String getDeDeInput();
```

- *Type:* java.lang.String

---

##### `enUsInput`<sup>Optional</sup> <a name="enUsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUsInput"></a>

```java
public java.lang.String getEnUsInput();
```

- *Type:* java.lang.String

---

##### `esEsInput`<sup>Optional</sup> <a name="esEsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEsInput"></a>

```java
public java.lang.String getEsEsInput();
```

- *Type:* java.lang.String

---

##### `frFrInput`<sup>Optional</sup> <a name="frFrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFrInput"></a>

```java
public java.lang.String getFrFrInput();
```

- *Type:* java.lang.String

---

##### `idIdInput`<sup>Optional</sup> <a name="idIdInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idIdInput"></a>

```java
public java.lang.String getIdIdInput();
```

- *Type:* java.lang.String

---

##### `itItInput`<sup>Optional</sup> <a name="itItInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itItInput"></a>

```java
public java.lang.String getItItInput();
```

- *Type:* java.lang.String

---

##### `jaJpInput`<sup>Optional</sup> <a name="jaJpInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJpInput"></a>

```java
public java.lang.String getJaJpInput();
```

- *Type:* java.lang.String

---

##### `koKrInput`<sup>Optional</sup> <a name="koKrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKrInput"></a>

```java
public java.lang.String getKoKrInput();
```

- *Type:* java.lang.String

---

##### `ptBrInput`<sup>Optional</sup> <a name="ptBrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBrInput"></a>

```java
public java.lang.String getPtBrInput();
```

- *Type:* java.lang.String

---

##### `zhCnInput`<sup>Optional</sup> <a name="zhCnInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCnInput"></a>

```java
public java.lang.String getZhCnInput();
```

- *Type:* java.lang.String

---

##### `zhTwInput`<sup>Optional</sup> <a name="zhTwInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTwInput"></a>

```java
public java.lang.String getZhTwInput();
```

- *Type:* java.lang.String

---

##### `deDe`<sup>Required</sup> <a name="deDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDe"></a>

```java
public java.lang.String getDeDe();
```

- *Type:* java.lang.String

---

##### `enUs`<sup>Required</sup> <a name="enUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUs"></a>

```java
public java.lang.String getEnUs();
```

- *Type:* java.lang.String

---

##### `esEs`<sup>Required</sup> <a name="esEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEs"></a>

```java
public java.lang.String getEsEs();
```

- *Type:* java.lang.String

---

##### `frFr`<sup>Required</sup> <a name="frFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFr"></a>

```java
public java.lang.String getFrFr();
```

- *Type:* java.lang.String

---

##### `idId`<sup>Required</sup> <a name="idId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idId"></a>

```java
public java.lang.String getIdId();
```

- *Type:* java.lang.String

---

##### `itIt`<sup>Required</sup> <a name="itIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itIt"></a>

```java
public java.lang.String getItIt();
```

- *Type:* java.lang.String

---

##### `jaJp`<sup>Required</sup> <a name="jaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJp"></a>

```java
public java.lang.String getJaJp();
```

- *Type:* java.lang.String

---

##### `koKr`<sup>Required</sup> <a name="koKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKr"></a>

```java
public java.lang.String getKoKr();
```

- *Type:* java.lang.String

---

##### `ptBr`<sup>Required</sup> <a name="ptBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBr"></a>

```java
public java.lang.String getPtBr();
```

- *Type:* java.lang.String

---

##### `zhCn`<sup>Required</sup> <a name="zhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCn"></a>

```java
public java.lang.String getZhCn();
```

- *Type:* java.lang.String

---

##### `zhTw`<sup>Required</sup> <a name="zhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTw"></a>

```java
public java.lang.String getZhTw();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectNotificationContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---


### ConnectNotificationTagsList <a name="ConnectNotificationTagsList" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotificationTagsList;

new ConnectNotificationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get"></a>

```java
public ConnectNotificationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectNotificationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>>

---


### ConnectNotificationTagsOutputReference <a name="ConnectNotificationTagsOutputReference" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_notification.ConnectNotificationTagsOutputReference;

new ConnectNotificationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectNotificationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>

---



