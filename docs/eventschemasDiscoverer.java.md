# `eventschemasDiscoverer` Submodule <a name="`eventschemasDiscoverer` Submodule" id="@cdktn/provider-awscc.eventschemasDiscoverer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventschemasDiscoverer <a name="EventschemasDiscoverer" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer awscc_eventschemas_discoverer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventschemas_discoverer.EventschemasDiscoverer;

EventschemasDiscoverer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .sourceArn(java.lang.String)
//  .crossAccount(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<EventschemasDiscovererTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | The ARN of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.crossAccount">crossAccount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Defines whether event schemas from other accounts are discovered. Default is True. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the discoverer. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>></code> | Tags associated with the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.sourceArn"></a>

- *Type:* java.lang.String

The ARN of the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#source_arn EventschemasDiscoverer#source_arn}

---

##### `crossAccount`<sup>Optional</sup> <a name="crossAccount" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.crossAccount"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Defines whether event schemas from other accounts are discovered. Default is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#cross_account EventschemasDiscoverer#cross_account}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the discoverer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#description EventschemasDiscoverer#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>>

Tags associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#tags EventschemasDiscoverer#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetCrossAccount">resetCrossAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EventschemasDiscovererTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>>

---

##### `resetCrossAccount` <a name="resetCrossAccount" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetCrossAccount"></a>

```java
public void resetCrossAccount()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EventschemasDiscoverer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isConstruct"></a>

```java
import io.cdktn.providers.awscc.eventschemas_discoverer.EventschemasDiscoverer;

EventschemasDiscoverer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.eventschemas_discoverer.EventschemasDiscoverer;

EventschemasDiscoverer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.eventschemas_discoverer.EventschemasDiscoverer;

EventschemasDiscoverer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.eventschemas_discoverer.EventschemasDiscoverer;

EventschemasDiscoverer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventschemasDiscoverer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EventschemasDiscoverer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventschemasDiscoverer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventschemasDiscoverer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EventschemasDiscoverer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererArn">discovererArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererId">discovererId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList">EventschemasDiscovererTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccountInput">crossAccountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArnInput">sourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccount">crossAccount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `discovererArn`<sup>Required</sup> <a name="discovererArn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererArn"></a>

```java
public java.lang.String getDiscovererArn();
```

- *Type:* java.lang.String

---

##### `discovererId`<sup>Required</sup> <a name="discovererId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererId"></a>

```java
public java.lang.String getDiscovererId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tags"></a>

```java
public EventschemasDiscovererTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList">EventschemasDiscovererTagsList</a>

---

##### `crossAccountInput`<sup>Optional</sup> <a name="crossAccountInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccountInput"></a>

```java
public java.lang.Boolean|IResolvable getCrossAccountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArnInput"></a>

```java
public java.lang.String getSourceArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EventschemasDiscovererTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>>

---

##### `crossAccount`<sup>Required</sup> <a name="crossAccount" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccount"></a>

```java
public java.lang.Boolean|IResolvable getCrossAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventschemasDiscovererConfig <a name="EventschemasDiscovererConfig" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventschemas_discoverer.EventschemasDiscovererConfig;

EventschemasDiscovererConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .sourceArn(java.lang.String)
//  .crossAccount(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<EventschemasDiscovererTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | The ARN of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.crossAccount">crossAccount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Defines whether event schemas from other accounts are discovered. Default is True. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the discoverer. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>></code> | Tags associated with the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

The ARN of the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#source_arn EventschemasDiscoverer#source_arn}

---

##### `crossAccount`<sup>Optional</sup> <a name="crossAccount" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.crossAccount"></a>

```java
public java.lang.Boolean|IResolvable getCrossAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Defines whether event schemas from other accounts are discovered. Default is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#cross_account EventschemasDiscoverer#cross_account}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the discoverer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#description EventschemasDiscoverer#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EventschemasDiscovererTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>>

Tags associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#tags EventschemasDiscoverer#tags}

---

### EventschemasDiscovererTags <a name="EventschemasDiscovererTags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventschemas_discoverer.EventschemasDiscovererTags;

EventschemasDiscovererTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#key EventschemasDiscoverer#key}. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#value EventschemasDiscoverer#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#key EventschemasDiscoverer#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#value EventschemasDiscoverer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventschemasDiscovererTagsList <a name="EventschemasDiscovererTagsList" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventschemas_discoverer.EventschemasDiscovererTagsList;

new EventschemasDiscovererTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.get"></a>

```java
public EventschemasDiscovererTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventschemasDiscovererTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>>

---


### EventschemasDiscovererTagsOutputReference <a name="EventschemasDiscovererTagsOutputReference" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventschemas_discoverer.EventschemasDiscovererTagsOutputReference;

new EventschemasDiscovererTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EventschemasDiscovererTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>

---



