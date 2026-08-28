# `dataexchangeEventAction` Submodule <a name="`dataexchangeEventAction` Submodule" id="@cdktn/provider-awscc.dataexchangeEventAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataexchangeEventAction <a name="DataexchangeEventAction" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action awscc_dataexchange_event_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventAction;

DataexchangeEventAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(DataexchangeEventActionAction)
    .event(DataexchangeEventActionEvent)
//  .tags(IResolvable|java.util.List<DataexchangeEventActionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a></code> | What occurs after a certain event. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.event">event</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a></code> | What occurs to start an action. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>></code> | The tags for the event action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

What occurs after a certain event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#action DataexchangeEventAction#action}

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.event"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

What occurs to start an action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#event DataexchangeEventAction#event}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>>

The tags for the event action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#tags DataexchangeEventAction#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putEvent">putEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putAction"></a>

```java
public void putAction(DataexchangeEventActionAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

---

##### `putEvent` <a name="putEvent" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putEvent"></a>

```java
public void putEvent(DataexchangeEventActionEvent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putEvent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DataexchangeEventActionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataexchangeEventAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isConstruct"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventAction;

DataexchangeEventAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventAction;

DataexchangeEventAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventAction;

DataexchangeEventAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventAction;

DataexchangeEventAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataexchangeEventAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataexchangeEventAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataexchangeEventAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataexchangeEventAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataexchangeEventAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference">DataexchangeEventActionActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.event">event</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference">DataexchangeEventActionEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventActionId">eventActionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList">DataexchangeEventActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventInput">eventInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.action"></a>

```java
public DataexchangeEventActionActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference">DataexchangeEventActionActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.event"></a>

```java
public DataexchangeEventActionEventOutputReference getEvent();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference">DataexchangeEventActionEventOutputReference</a>

---

##### `eventActionId`<sup>Required</sup> <a name="eventActionId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventActionId"></a>

```java
public java.lang.String getEventActionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tags"></a>

```java
public DataexchangeEventActionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList">DataexchangeEventActionTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.actionInput"></a>

```java
public IResolvable|DataexchangeEventActionAction getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventInput"></a>

```java
public IResolvable|DataexchangeEventActionEvent getEventInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DataexchangeEventActionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataexchangeEventActionAction <a name="DataexchangeEventActionAction" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionAction;

DataexchangeEventActionAction.builder()
//  .exportRevisionToS3(DataexchangeEventActionActionExportRevisionToS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction.property.exportRevisionToS3">exportRevisionToS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a></code> | Details of the operation to be performed by the job. |

---

##### `exportRevisionToS3`<sup>Optional</sup> <a name="exportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction.property.exportRevisionToS3"></a>

```java
public DataexchangeEventActionActionExportRevisionToS3 getExportRevisionToS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>

Details of the operation to be performed by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#export_revision_to_s3 DataexchangeEventAction#export_revision_to_s3}

---

### DataexchangeEventActionActionExportRevisionToS3 <a name="DataexchangeEventActionActionExportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionActionExportRevisionToS3;

DataexchangeEventActionActionExportRevisionToS3.builder()
//  .encryption(DataexchangeEventActionActionExportRevisionToS3Encryption)
//  .revisionDestination(DataexchangeEventActionActionExportRevisionToS3RevisionDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a></code> | Encryption configuration of the export job. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.revisionDestination">revisionDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a></code> | A revision destination is the Amazon S3 bucket folder destination to where the export will be sent. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.encryption"></a>

```java
public DataexchangeEventActionActionExportRevisionToS3Encryption getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>

Encryption configuration of the export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#encryption DataexchangeEventAction#encryption}

---

##### `revisionDestination`<sup>Optional</sup> <a name="revisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.revisionDestination"></a>

```java
public DataexchangeEventActionActionExportRevisionToS3RevisionDestination getRevisionDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#revision_destination DataexchangeEventAction#revision_destination}

---

### DataexchangeEventActionActionExportRevisionToS3Encryption <a name="DataexchangeEventActionActionExportRevisionToS3Encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionActionExportRevisionToS3Encryption;

DataexchangeEventActionActionExportRevisionToS3Encryption.builder()
//  .kmsKeyArn(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.type">type</a></code> | <code>java.lang.String</code> | The type of server side encryption used for encrypting the objects in Amazon S3. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#kms_key_arn DataexchangeEventAction#kms_key_arn}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of server side encryption used for encrypting the objects in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#type DataexchangeEventAction#type}

---

### DataexchangeEventActionActionExportRevisionToS3RevisionDestination <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionActionExportRevisionToS3RevisionDestination;

DataexchangeEventActionActionExportRevisionToS3RevisionDestination.builder()
//  .bucket(java.lang.String)
//  .keyPattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The Amazon S3 bucket that is the destination for the event action. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.keyPattern">keyPattern</a></code> | <code>java.lang.String</code> | A string representing the pattern for generated names of the individual assets in the revision. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The Amazon S3 bucket that is the destination for the event action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#bucket DataexchangeEventAction#bucket}

---

##### `keyPattern`<sup>Optional</sup> <a name="keyPattern" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.keyPattern"></a>

```java
public java.lang.String getKeyPattern();
```

- *Type:* java.lang.String

A string representing the pattern for generated names of the individual assets in the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#key_pattern DataexchangeEventAction#key_pattern}

---

### DataexchangeEventActionConfig <a name="DataexchangeEventActionConfig" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionConfig;

DataexchangeEventActionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(DataexchangeEventActionAction)
    .event(DataexchangeEventActionEvent)
//  .tags(IResolvable|java.util.List<DataexchangeEventActionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a></code> | What occurs after a certain event. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.event">event</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a></code> | What occurs to start an action. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>></code> | The tags for the event action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.action"></a>

```java
public DataexchangeEventActionAction getAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

What occurs after a certain event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#action DataexchangeEventAction#action}

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.event"></a>

```java
public DataexchangeEventActionEvent getEvent();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

What occurs to start an action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#event DataexchangeEventAction#event}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DataexchangeEventActionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>>

The tags for the event action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#tags DataexchangeEventAction#tags}

---

### DataexchangeEventActionEvent <a name="DataexchangeEventActionEvent" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionEvent;

DataexchangeEventActionEvent.builder()
//  .revisionPublished(DataexchangeEventActionEventRevisionPublished)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent.property.revisionPublished">revisionPublished</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a></code> | Information about the published revision. |

---

##### `revisionPublished`<sup>Optional</sup> <a name="revisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent.property.revisionPublished"></a>

```java
public DataexchangeEventActionEventRevisionPublished getRevisionPublished();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>

Information about the published revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#revision_published DataexchangeEventAction#revision_published}

---

### DataexchangeEventActionEventRevisionPublished <a name="DataexchangeEventActionEventRevisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionEventRevisionPublished;

DataexchangeEventActionEventRevisionPublished.builder()
//  .dataSetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.property.dataSetId">dataSetId</a></code> | <code>java.lang.String</code> | The data set ID of the published revision. |

---

##### `dataSetId`<sup>Optional</sup> <a name="dataSetId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.property.dataSetId"></a>

```java
public java.lang.String getDataSetId();
```

- *Type:* java.lang.String

The data set ID of the published revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#data_set_id DataexchangeEventAction#data_set_id}

---

### DataexchangeEventActionTags <a name="DataexchangeEventActionTags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionTags;

DataexchangeEventActionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#key DataexchangeEventAction#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#value DataexchangeEventAction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference <a name="DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference;

new DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|DataexchangeEventActionActionExportRevisionToS3Encryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>

---


### DataexchangeEventActionActionExportRevisionToS3OutputReference <a name="DataexchangeEventActionActionExportRevisionToS3OutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionActionExportRevisionToS3OutputReference;

new DataexchangeEventActionActionExportRevisionToS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination">putRevisionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetRevisionDestination">resetRevisionDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption"></a>

```java
public void putEncryption(DataexchangeEventActionActionExportRevisionToS3Encryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>

---

##### `putRevisionDestination` <a name="putRevisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination"></a>

```java
public void putRevisionDestination(DataexchangeEventActionActionExportRevisionToS3RevisionDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

---

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetRevisionDestination` <a name="resetRevisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetRevisionDestination"></a>

```java
public void resetRevisionDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination">revisionDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryptionInput">encryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestinationInput">revisionDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption"></a>

```java
public DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a>

---

##### `revisionDestination`<sup>Required</sup> <a name="revisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination"></a>

```java
public DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference getRevisionDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryptionInput"></a>

```java
public IResolvable|DataexchangeEventActionActionExportRevisionToS3Encryption getEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>

---

##### `revisionDestinationInput`<sup>Optional</sup> <a name="revisionDestinationInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestinationInput"></a>

```java
public IResolvable|DataexchangeEventActionActionExportRevisionToS3RevisionDestination getRevisionDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue"></a>

```java
public IResolvable|DataexchangeEventActionActionExportRevisionToS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>

---


### DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference;

new DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetKeyPattern">resetKeyPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKeyPattern` <a name="resetKeyPattern" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetKeyPattern"></a>

```java
public void resetKeyPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPatternInput">keyPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern">keyPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyPatternInput`<sup>Optional</sup> <a name="keyPatternInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPatternInput"></a>

```java
public java.lang.String getKeyPatternInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern"></a>

```java
public java.lang.String getKeyPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|DataexchangeEventActionActionExportRevisionToS3RevisionDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

---


### DataexchangeEventActionActionOutputReference <a name="DataexchangeEventActionActionOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionActionOutputReference;

new DataexchangeEventActionActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3">putExportRevisionToS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resetExportRevisionToS3">resetExportRevisionToS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExportRevisionToS3` <a name="putExportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3"></a>

```java
public void putExportRevisionToS3(DataexchangeEventActionActionExportRevisionToS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>

---

##### `resetExportRevisionToS3` <a name="resetExportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resetExportRevisionToS3"></a>

```java
public void resetExportRevisionToS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3">exportRevisionToS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference">DataexchangeEventActionActionExportRevisionToS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3Input">exportRevisionToS3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exportRevisionToS3`<sup>Required</sup> <a name="exportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3"></a>

```java
public DataexchangeEventActionActionExportRevisionToS3OutputReference getExportRevisionToS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference">DataexchangeEventActionActionExportRevisionToS3OutputReference</a>

---

##### `exportRevisionToS3Input`<sup>Optional</sup> <a name="exportRevisionToS3Input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3Input"></a>

```java
public IResolvable|DataexchangeEventActionActionExportRevisionToS3 getExportRevisionToS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.internalValue"></a>

```java
public IResolvable|DataexchangeEventActionAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

---


### DataexchangeEventActionEventOutputReference <a name="DataexchangeEventActionEventOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionEventOutputReference;

new DataexchangeEventActionEventOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished">putRevisionPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resetRevisionPublished">resetRevisionPublished</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRevisionPublished` <a name="putRevisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished"></a>

```java
public void putRevisionPublished(DataexchangeEventActionEventRevisionPublished value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>

---

##### `resetRevisionPublished` <a name="resetRevisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resetRevisionPublished"></a>

```java
public void resetRevisionPublished()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublished">revisionPublished</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference">DataexchangeEventActionEventRevisionPublishedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublishedInput">revisionPublishedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `revisionPublished`<sup>Required</sup> <a name="revisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublished"></a>

```java
public DataexchangeEventActionEventRevisionPublishedOutputReference getRevisionPublished();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference">DataexchangeEventActionEventRevisionPublishedOutputReference</a>

---

##### `revisionPublishedInput`<sup>Optional</sup> <a name="revisionPublishedInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublishedInput"></a>

```java
public IResolvable|DataexchangeEventActionEventRevisionPublished getRevisionPublishedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.internalValue"></a>

```java
public IResolvable|DataexchangeEventActionEvent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

---


### DataexchangeEventActionEventRevisionPublishedOutputReference <a name="DataexchangeEventActionEventRevisionPublishedOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionEventRevisionPublishedOutputReference;

new DataexchangeEventActionEventRevisionPublishedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resetDataSetId">resetDataSetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSetId` <a name="resetDataSetId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resetDataSetId"></a>

```java
public void resetDataSetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetIdInput">dataSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId">dataSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetIdInput`<sup>Optional</sup> <a name="dataSetIdInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetIdInput"></a>

```java
public java.lang.String getDataSetIdInput();
```

- *Type:* java.lang.String

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId"></a>

```java
public java.lang.String getDataSetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue"></a>

```java
public IResolvable|DataexchangeEventActionEventRevisionPublished getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>

---


### DataexchangeEventActionTagsList <a name="DataexchangeEventActionTagsList" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionTagsList;

new DataexchangeEventActionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.get"></a>

```java
public DataexchangeEventActionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataexchangeEventActionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>>

---


### DataexchangeEventActionTagsOutputReference <a name="DataexchangeEventActionTagsOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dataexchange_event_action.DataexchangeEventActionTagsOutputReference;

new DataexchangeEventActionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataexchangeEventActionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>

---



