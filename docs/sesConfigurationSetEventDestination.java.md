# `sesConfigurationSetEventDestination` Submodule <a name="`sesConfigurationSetEventDestination` Submodule" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesConfigurationSetEventDestination <a name="SesConfigurationSetEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestination;

SesConfigurationSetEventDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configurationSetName(java.lang.String)
    .eventDestination(SesConfigurationSetEventDestinationEventDestination)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | The name of the configuration set that contains the event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.eventDestination">eventDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | The event destination object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.configurationSetName"></a>

- *Type:* java.lang.String

The name of the configuration set that contains the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#configuration_set_name SesConfigurationSetEventDestination#configuration_set_name}

---

##### `eventDestination`<sup>Required</sup> <a name="eventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.eventDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

The event destination object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_destination SesConfigurationSetEventDestination#event_destination}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination">putEventDestination</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventDestination` <a name="putEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination"></a>

```java
public void putEventDestination(SesConfigurationSetEventDestinationEventDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestination;

SesConfigurationSetEventDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestination;

SesConfigurationSetEventDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestination;

SesConfigurationSetEventDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestination;

SesConfigurationSetEventDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SesConfigurationSetEventDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SesConfigurationSetEventDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SesConfigurationSetEventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SesConfigurationSetEventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetEventDestinationId">configurationSetEventDestinationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestination">eventDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestinationInput">eventDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationSetEventDestinationId`<sup>Required</sup> <a name="configurationSetEventDestinationId" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetEventDestinationId"></a>

```java
public java.lang.String getConfigurationSetEventDestinationId();
```

- *Type:* java.lang.String

---

##### `eventDestination`<sup>Required</sup> <a name="eventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestination"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationOutputReference getEventDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetNameInput"></a>

```java
public java.lang.String getConfigurationSetNameInput();
```

- *Type:* java.lang.String

---

##### `eventDestinationInput`<sup>Optional</sup> <a name="eventDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestinationInput"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestination getEventDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SesConfigurationSetEventDestinationConfig <a name="SesConfigurationSetEventDestinationConfig" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationConfig;

SesConfigurationSetEventDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configurationSetName(java.lang.String)
    .eventDestination(SesConfigurationSetEventDestinationEventDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | The name of the configuration set that contains the event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.eventDestination">eventDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | The event destination object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

The name of the configuration set that contains the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#configuration_set_name SesConfigurationSetEventDestination#configuration_set_name}

---

##### `eventDestination`<sup>Required</sup> <a name="eventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.eventDestination"></a>

```java
public SesConfigurationSetEventDestinationEventDestination getEventDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

The event destination object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_destination SesConfigurationSetEventDestination#event_destination}

---

### SesConfigurationSetEventDestinationEventDestination <a name="SesConfigurationSetEventDestinationEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestination;

SesConfigurationSetEventDestinationEventDestination.builder()
    .matchingEventTypes(java.util.List<java.lang.String>)
//  .cloudwatchDestination(SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination)
//  .enabled(java.lang.Boolean|IResolvable)
//  .eventBridgeDestination(SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination)
//  .kinesisFirehoseDestination(SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination)
//  .name(java.lang.String)
//  .snsDestination(SesConfigurationSetEventDestinationEventDestinationSnsDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.matchingEventTypes">matchingEventTypes</a></code> | <code>java.util.List<java.lang.String></code> | The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.cloudwatchDestination">cloudwatchDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.eventBridgeDestination">eventBridgeDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | An object that contains Event bus ARN associated with the event bridge destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.name">name</a></code> | <code>java.lang.String</code> | The name of the event destination set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | An object that contains SNS topic ARN associated event destination. |

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.matchingEventTypes"></a>

```java
public java.util.List<java.lang.String> getMatchingEventTypes();
```

- *Type:* java.util.List<java.lang.String>

The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#matching_event_types SesConfigurationSetEventDestination#matching_event_types}

---

##### `cloudwatchDestination`<sup>Optional</sup> <a name="cloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.cloudwatchDestination"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination getCloudwatchDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#cloudwatch_destination SesConfigurationSetEventDestination#cloudwatch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set.

Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#enabled SesConfigurationSetEventDestination#enabled}

---

##### `eventBridgeDestination`<sup>Optional</sup> <a name="eventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.eventBridgeDestination"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination getEventBridgeDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

An object that contains Event bus ARN associated with the event bridge destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bridge_destination SesConfigurationSetEventDestination#event_bridge_destination}

---

##### `kinesisFirehoseDestination`<sup>Optional</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.kinesisFirehoseDestination"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination getKinesisFirehoseDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#kinesis_firehose_destination SesConfigurationSetEventDestination#kinesis_firehose_destination}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the event destination set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#name SesConfigurationSetEventDestination#name}

---

##### `snsDestination`<sup>Optional</sup> <a name="snsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.snsDestination"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationSnsDestination getSnsDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

An object that contains SNS topic ARN associated event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#sns_destination SesConfigurationSetEventDestination#sns_destination}

---

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination;

SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.builder()
//  .dimensionConfigurations(IResolvable|java.util.List<SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.property.dimensionConfigurations">dimensionConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>></code> | A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch. |

---

##### `dimensionConfigurations`<sup>Optional</sup> <a name="dimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.property.dimensionConfigurations"></a>

```java
public IResolvable|java.util.List<SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations> getDimensionConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>>

A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#dimension_configurations SesConfigurationSetEventDestination#dimension_configurations}

---

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations;

SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.builder()
//  .defaultDimensionValue(java.lang.String)
//  .dimensionName(java.lang.String)
//  .dimensionValueSource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.defaultDimensionValue">defaultDimensionValue</a></code> | <code>java.lang.String</code> | The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionName">dimensionName</a></code> | <code>java.lang.String</code> | The name of an Amazon CloudWatch dimension associated with an email sending metric. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionValueSource">dimensionValueSource</a></code> | <code>java.lang.String</code> | The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. |

---

##### `defaultDimensionValue`<sup>Optional</sup> <a name="defaultDimensionValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.defaultDimensionValue"></a>

```java
public java.lang.String getDefaultDimensionValue();
```

- *Type:* java.lang.String

The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#default_dimension_value SesConfigurationSetEventDestination#default_dimension_value}

---

##### `dimensionName`<sup>Optional</sup> <a name="dimensionName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionName"></a>

```java
public java.lang.String getDimensionName();
```

- *Type:* java.lang.String

The name of an Amazon CloudWatch dimension associated with an email sending metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#dimension_name SesConfigurationSetEventDestination#dimension_name}

---

##### `dimensionValueSource`<sup>Optional</sup> <a name="dimensionValueSource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionValueSource"></a>

```java
public java.lang.String getDimensionValueSource();
```

- *Type:* java.lang.String

The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch.

To use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, specify messageTag. To use your own email headers, specify emailHeader. To put a custom tag on any link included in your email, specify linkTag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#dimension_value_source SesConfigurationSetEventDestination#dimension_value_source}

---

### SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination <a name="SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination;

SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.builder()
//  .eventBusArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bus_arn SesConfigurationSetEventDestination#event_bus_arn}. |

---

##### `eventBusArn`<sup>Optional</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bus_arn SesConfigurationSetEventDestination#event_bus_arn}.

---

### SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination <a name="SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination;

SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.builder()
//  .deliveryStreamArn(java.lang.String)
//  .iamRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>java.lang.String</code> | The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream. |

---

##### `deliveryStreamArn`<sup>Optional</sup> <a name="deliveryStreamArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```java
public java.lang.String getDeliveryStreamArn();
```

- *Type:* java.lang.String

The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#delivery_stream_arn SesConfigurationSetEventDestination#delivery_stream_arn}

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#iam_role_arn SesConfigurationSetEventDestination#iam_role_arn}

---

### SesConfigurationSetEventDestinationEventDestinationSnsDestination <a name="SesConfigurationSetEventDestinationEventDestinationSnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationSnsDestination;

SesConfigurationSetEventDestinationEventDestinationSnsDestination.builder()
//  .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#topic_arn SesConfigurationSetEventDestination#topic_arn}. |

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#topic_arn SesConfigurationSetEventDestination#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList;

new SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>>

---


### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference;

new SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDefaultDimensionValue">resetDefaultDimensionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionName">resetDimensionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionValueSource">resetDimensionValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultDimensionValue` <a name="resetDefaultDimensionValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDefaultDimensionValue"></a>

```java
public void resetDefaultDimensionValue()
```

##### `resetDimensionName` <a name="resetDimensionName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionName"></a>

```java
public void resetDimensionName()
```

##### `resetDimensionValueSource` <a name="resetDimensionValueSource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionValueSource"></a>

```java
public void resetDimensionValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValueInput">defaultDimensionValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionNameInput">dimensionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSourceInput">dimensionValueSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue">defaultDimensionValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName">dimensionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource">dimensionValueSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultDimensionValueInput`<sup>Optional</sup> <a name="defaultDimensionValueInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValueInput"></a>

```java
public java.lang.String getDefaultDimensionValueInput();
```

- *Type:* java.lang.String

---

##### `dimensionNameInput`<sup>Optional</sup> <a name="dimensionNameInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionNameInput"></a>

```java
public java.lang.String getDimensionNameInput();
```

- *Type:* java.lang.String

---

##### `dimensionValueSourceInput`<sup>Optional</sup> <a name="dimensionValueSourceInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSourceInput"></a>

```java
public java.lang.String getDimensionValueSourceInput();
```

- *Type:* java.lang.String

---

##### `defaultDimensionValue`<sup>Required</sup> <a name="defaultDimensionValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue"></a>

```java
public java.lang.String getDefaultDimensionValue();
```

- *Type:* java.lang.String

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName"></a>

```java
public java.lang.String getDimensionName();
```

- *Type:* java.lang.String

---

##### `dimensionValueSource`<sup>Required</sup> <a name="dimensionValueSource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource"></a>

```java
public java.lang.String getDimensionValueSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>

---


### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference;

new SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations">putDimensionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resetDimensionConfigurations">resetDimensionConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensionConfigurations` <a name="putDimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations"></a>

```java
public void putDimensionConfigurations(IResolvable|java.util.List<SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>>

---

##### `resetDimensionConfigurations` <a name="resetDimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resetDimensionConfigurations"></a>

```java
public void resetDimensionConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations">dimensionConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurationsInput">dimensionConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionConfigurations`<sup>Required</sup> <a name="dimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList getDimensionConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a>

---

##### `dimensionConfigurationsInput`<sup>Optional</sup> <a name="dimensionConfigurationsInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurationsInput"></a>

```java
public IResolvable|java.util.List<SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations> getDimensionConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference;

new SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resetEventBusArn">resetEventBusArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventBusArn` <a name="resetEventBusArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resetEventBusArn"></a>

```java
public void resetEventBusArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArnInput">eventBusArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventBusArnInput`<sup>Optional</sup> <a name="eventBusArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArnInput"></a>

```java
public java.lang.String getEventBusArnInput();
```

- *Type:* java.lang.String

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference;

new SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn">resetDeliveryStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStreamArn` <a name="resetDeliveryStreamArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn"></a>

```java
public void resetDeliveryStreamArn()
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetIamRoleArn"></a>

```java
public void resetIamRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">deliveryStreamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStreamArnInput`<sup>Optional</sup> <a name="deliveryStreamArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```java
public java.lang.String getDeliveryStreamArnInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `deliveryStreamArn`<sup>Required</sup> <a name="deliveryStreamArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```java
public java.lang.String getDeliveryStreamArn();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationOutputReference;

new SesConfigurationSetEventDestinationEventDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination">putCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination">putEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination">putKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination">putSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetCloudwatchDestination">resetCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEventBridgeDestination">resetEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetKinesisFirehoseDestination">resetKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetSnsDestination">resetSnsDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchDestination` <a name="putCloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination"></a>

```java
public void putCloudwatchDestination(SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---

##### `putEventBridgeDestination` <a name="putEventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination"></a>

```java
public void putEventBridgeDestination(SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---

##### `putKinesisFirehoseDestination` <a name="putKinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination"></a>

```java
public void putKinesisFirehoseDestination(SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---

##### `putSnsDestination` <a name="putSnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination"></a>

```java
public void putSnsDestination(SesConfigurationSetEventDestinationEventDestinationSnsDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---

##### `resetCloudwatchDestination` <a name="resetCloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetCloudwatchDestination"></a>

```java
public void resetCloudwatchDestination()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEventBridgeDestination` <a name="resetEventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEventBridgeDestination"></a>

```java
public void resetEventBridgeDestination()
```

##### `resetKinesisFirehoseDestination` <a name="resetKinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetKinesisFirehoseDestination"></a>

```java
public void resetKinesisFirehoseDestination()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSnsDestination` <a name="resetSnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetSnsDestination"></a>

```java
public void resetSnsDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination">cloudwatchDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination">eventBridgeDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestinationInput">cloudwatchDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestinationInput">eventBridgeDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestinationInput">kinesisFirehoseDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypesInput">matchingEventTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestinationInput">snsDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes">matchingEventTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchDestination`<sup>Required</sup> <a name="cloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference getCloudwatchDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a>

---

##### `eventBridgeDestination`<sup>Required</sup> <a name="eventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference getEventBridgeDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a>

---

##### `kinesisFirehoseDestination`<sup>Required</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference getKinesisFirehoseDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a>

---

##### `snsDestination`<sup>Required</sup> <a name="snsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination"></a>

```java
public SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference getSnsDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a>

---

##### `cloudwatchDestinationInput`<sup>Optional</sup> <a name="cloudwatchDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestinationInput"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination getCloudwatchDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventBridgeDestinationInput`<sup>Optional</sup> <a name="eventBridgeDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestinationInput"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination getEventBridgeDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---

##### `kinesisFirehoseDestinationInput`<sup>Optional</sup> <a name="kinesisFirehoseDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestinationInput"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination getKinesisFirehoseDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---

##### `matchingEventTypesInput`<sup>Optional</sup> <a name="matchingEventTypesInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypesInput"></a>

```java
public java.util.List<java.lang.String> getMatchingEventTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `snsDestinationInput`<sup>Optional</sup> <a name="snsDestinationInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestinationInput"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestinationSnsDestination getSnsDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes"></a>

```java
public java.util.List<java.lang.String> getMatchingEventTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set_event_destination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference;

new SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resetTopicArn"></a>

```java
public void resetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetEventDestinationEventDestinationSnsDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---



