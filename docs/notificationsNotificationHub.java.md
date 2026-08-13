# `notificationsNotificationHub` Submodule <a name="`notificationsNotificationHub` Submodule" id="@cdktn/provider-awscc.notificationsNotificationHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsNotificationHub <a name="NotificationsNotificationHub" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_notification_hub awscc_notifications_notification_hub}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer"></a>

```java
import io.cdktn.providers.awscc.notifications_notification_hub.NotificationsNotificationHub;

NotificationsNotificationHub.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region that NotificationHub is present in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region that NotificationHub is present in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_notification_hub#region NotificationsNotificationHub#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationsNotificationHub resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.isConstruct"></a>

```java
import io.cdktn.providers.awscc.notifications_notification_hub.NotificationsNotificationHub;

NotificationsNotificationHub.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.notifications_notification_hub.NotificationsNotificationHub;

NotificationsNotificationHub.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.notifications_notification_hub.NotificationsNotificationHub;

NotificationsNotificationHub.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.notifications_notification_hub.NotificationsNotificationHub;

NotificationsNotificationHub.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NotificationsNotificationHub.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NotificationsNotificationHub resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NotificationsNotificationHub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NotificationsNotificationHub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_notification_hub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NotificationsNotificationHub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.notificationHubStatusSummary">notificationHubStatusSummary</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference">NotificationsNotificationHubNotificationHubStatusSummaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationHubStatusSummary`<sup>Required</sup> <a name="notificationHubStatusSummary" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.notificationHubStatusSummary"></a>

```java
public NotificationsNotificationHubNotificationHubStatusSummaryOutputReference getNotificationHubStatusSummary();
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference">NotificationsNotificationHubNotificationHubStatusSummaryOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHub.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsNotificationHubConfig <a name="NotificationsNotificationHubConfig" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.notifications_notification_hub.NotificationsNotificationHubConfig;

NotificationsNotificationHubConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region that NotificationHub is present in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region that NotificationHub is present in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_notification_hub#region NotificationsNotificationHub#region}

---

### NotificationsNotificationHubNotificationHubStatusSummary <a name="NotificationsNotificationHubNotificationHubStatusSummary" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummary.Initializer"></a>

```java
import io.cdktn.providers.awscc.notifications_notification_hub.NotificationsNotificationHubNotificationHubStatusSummary;

NotificationsNotificationHubNotificationHubStatusSummary.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### NotificationsNotificationHubNotificationHubStatusSummaryOutputReference <a name="NotificationsNotificationHubNotificationHubStatusSummaryOutputReference" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.notifications_notification_hub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference;

new NotificationsNotificationHubNotificationHubStatusSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.notificationHubStatus">notificationHubStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.notificationHubStatusReason">notificationHubStatusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummary">NotificationsNotificationHubNotificationHubStatusSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notificationHubStatus`<sup>Required</sup> <a name="notificationHubStatus" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.notificationHubStatus"></a>

```java
public java.lang.String getNotificationHubStatus();
```

- *Type:* java.lang.String

---

##### `notificationHubStatusReason`<sup>Required</sup> <a name="notificationHubStatusReason" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.notificationHubStatusReason"></a>

```java
public java.lang.String getNotificationHubStatusReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummaryOutputReference.property.internalValue"></a>

```java
public NotificationsNotificationHubNotificationHubStatusSummary getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationsNotificationHub.NotificationsNotificationHubNotificationHubStatusSummary">NotificationsNotificationHubNotificationHubStatusSummary</a>

---



