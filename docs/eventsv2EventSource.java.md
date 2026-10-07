# `eventsv2EventSource` Submodule <a name="`eventsv2EventSource` Submodule" id="@cdktn/provider-awscc.eventsv2EventSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eventsv2EventSource <a name="Eventsv2EventSource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source awscc_eventsv2_event_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSource;

Eventsv2EventSource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configuration(Eventsv2EventSourceConfiguration)
    .eventBusArn(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<Eventsv2EventSourceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a></code> | The event source configuration. Specify exactly one of AwsServiceEventsConfiguration or PartnerEventsConfiguration. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | The ARN of the custom event bus the event source forwards onto. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the event source. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the event source. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>></code> | The tags assigned to the event source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a>

The event source configuration. Specify exactly one of AwsServiceEventsConfiguration or PartnerEventsConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#configuration Eventsv2EventSource#configuration}

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.eventBusArn"></a>

- *Type:* java.lang.String

The ARN of the custom event bus the event source forwards onto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#event_bus_arn Eventsv2EventSource#event_bus_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the event source.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. Names cannot begin with the reserved aws. prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#name Eventsv2EventSource#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the event source. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#description Eventsv2EventSource#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>>

The tags assigned to the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#tags Eventsv2EventSource#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putConfiguration"></a>

```java
public void putConfiguration(Eventsv2EventSourceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Eventsv2EventSourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Eventsv2EventSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isConstruct"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSource;

Eventsv2EventSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSource;

Eventsv2EventSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSource;

Eventsv2EventSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSource;

Eventsv2EventSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Eventsv2EventSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Eventsv2EventSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Eventsv2EventSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Eventsv2EventSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Eventsv2EventSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference">Eventsv2EventSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventSourceArn">eventSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.revoked">revoked</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList">Eventsv2EventSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventBusArnInput">eventBusArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.configuration"></a>

```java
public Eventsv2EventSourceConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference">Eventsv2EventSourceConfigurationOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `eventSourceArn`<sup>Required</sup> <a name="eventSourceArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventSourceArn"></a>

```java
public java.lang.String getEventSourceArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `revoked`<sup>Required</sup> <a name="revoked" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.revoked"></a>

```java
public IResolvable getRevoked();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tags"></a>

```java
public Eventsv2EventSourceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList">Eventsv2EventSourceTagsList</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.configurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfiguration getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventBusArnInput`<sup>Optional</sup> <a name="eventBusArnInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventBusArnInput"></a>

```java
public java.lang.String getEventBusArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Eventsv2EventSourceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Eventsv2EventSourceConfig <a name="Eventsv2EventSourceConfig" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfig;

Eventsv2EventSourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configuration(Eventsv2EventSourceConfiguration)
    .eventBusArn(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<Eventsv2EventSourceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a></code> | The event source configuration. Specify exactly one of AwsServiceEventsConfiguration or PartnerEventsConfiguration. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | The ARN of the custom event bus the event source forwards onto. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the event source. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the event source. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>></code> | The tags assigned to the event source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.configuration"></a>

```java
public Eventsv2EventSourceConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a>

The event source configuration. Specify exactly one of AwsServiceEventsConfiguration or PartnerEventsConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#configuration Eventsv2EventSource#configuration}

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

The ARN of the custom event bus the event source forwards onto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#event_bus_arn Eventsv2EventSource#event_bus_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the event source.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. Names cannot begin with the reserved aws. prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#name Eventsv2EventSource#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the event source. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#description Eventsv2EventSource#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Eventsv2EventSourceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>>

The tags assigned to the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#tags Eventsv2EventSource#tags}

---

### Eventsv2EventSourceConfiguration <a name="Eventsv2EventSourceConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfiguration;

Eventsv2EventSourceConfiguration.builder()
//  .awsServiceEventsConfiguration(Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration)
//  .partnerEventsConfiguration(Eventsv2EventSourceConfigurationPartnerEventsConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.awsServiceEventsConfiguration">awsServiceEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a></code> | Configuration for forwarding a single AWS service's events. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.partnerEventsConfiguration">partnerEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a></code> | Configuration for forwarding a partner event source's events. |

---

##### `awsServiceEventsConfiguration`<sup>Optional</sup> <a name="awsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.awsServiceEventsConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration getAwsServiceEventsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

Configuration for forwarding a single AWS service's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#aws_service_events_configuration Eventsv2EventSource#aws_service_events_configuration}

---

##### `partnerEventsConfiguration`<sup>Optional</sup> <a name="partnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.partnerEventsConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationPartnerEventsConfiguration getPartnerEventsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

Configuration for forwarding a partner event source's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#partner_events_configuration Eventsv2EventSource#partner_events_configuration}

---

### Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration <a name="Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration;

Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.builder()
//  .awsService(java.lang.String)
//  .onFailureConfiguration(Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration)
//  .pattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.awsService">awsService</a></code> | <code>java.lang.String</code> | A single AWS service source identifier, for example aws.s3. Wildcards and lists are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.onFailureConfiguration">onFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a></code> | The destination for events that could not be forwarded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.pattern">pattern</a></code> | <code>java.lang.String</code> | A filter pattern, as a JSON string, that defines which events from the specified AWS service are forwarded to the event bus. |

---

##### `awsService`<sup>Optional</sup> <a name="awsService" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.awsService"></a>

```java
public java.lang.String getAwsService();
```

- *Type:* java.lang.String

A single AWS service source identifier, for example aws.s3. Wildcards and lists are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#aws_service Eventsv2EventSource#aws_service}

---

##### `onFailureConfiguration`<sup>Optional</sup> <a name="onFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.onFailureConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration getOnFailureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

The destination for events that could not be forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#on_failure_configuration Eventsv2EventSource#on_failure_configuration}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

A filter pattern, as a JSON string, that defines which events from the specified AWS service are forwarded to the event bus.

Do not include source, account, or region as top-level fields. If you do not specify a pattern, all events from the service are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#pattern Eventsv2EventSource#pattern}

---

### Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration <a name="Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration;

Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the Amazon SQS standard queue that receives events that could not be forwarded. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the Amazon SQS standard queue that receives events that could not be forwarded.

FIFO queues are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#arn Eventsv2EventSource#arn}

---

### Eventsv2EventSourceConfigurationPartnerEventsConfiguration <a name="Eventsv2EventSourceConfigurationPartnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationPartnerEventsConfiguration;

Eventsv2EventSourceConfigurationPartnerEventsConfiguration.builder()
//  .onFailureConfiguration(Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration)
//  .partnerBusKmsKeyIdentifier(java.lang.String)
//  .partnerEventSourceArn(java.lang.String)
//  .pattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.onFailureConfiguration">onFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a></code> | The destination for events that could not be forwarded, covering both the forwarding target and the managed partner event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.partnerBusKmsKeyIdentifier">partnerBusKmsKeyIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on the managed partner event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.partnerEventSourceArn">partnerEventSourceArn</a></code> | <code>java.lang.String</code> | The ARN of the partner event source to forward. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.pattern">pattern</a></code> | <code>java.lang.String</code> | A filter pattern, as a JSON string, that defines which events from the specified partner event source are forwarded to the event bus. |

---

##### `onFailureConfiguration`<sup>Optional</sup> <a name="onFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.onFailureConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration getOnFailureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a>

The destination for events that could not be forwarded, covering both the forwarding target and the managed partner event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#on_failure_configuration Eventsv2EventSource#on_failure_configuration}

---

##### `partnerBusKmsKeyIdentifier`<sup>Optional</sup> <a name="partnerBusKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.partnerBusKmsKeyIdentifier"></a>

```java
public java.lang.String getPartnerBusKmsKeyIdentifier();
```

- *Type:* java.lang.String

The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on the managed partner event bus.

The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an AWS owned key to encrypt events on the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#partner_bus_kms_key_identifier Eventsv2EventSource#partner_bus_kms_key_identifier}

---

##### `partnerEventSourceArn`<sup>Optional</sup> <a name="partnerEventSourceArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.partnerEventSourceArn"></a>

```java
public java.lang.String getPartnerEventSourceArn();
```

- *Type:* java.lang.String

The ARN of the partner event source to forward.

The partner owns the event source, so the ARN's account segment is empty. Changing this property replaces the event source. Because Name and EventBusArn together identify an event source, and the replacement is created before the old resource is deleted, change Name in the same update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#partner_event_source_arn Eventsv2EventSource#partner_event_source_arn}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

A filter pattern, as a JSON string, that defines which events from the specified partner event source are forwarded to the event bus.

If you do not specify a pattern, all events from the partner event source are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#pattern Eventsv2EventSource#pattern}

---

### Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration <a name="Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration;

Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the Amazon SQS standard queue that receives events that could not be forwarded. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the Amazon SQS standard queue that receives events that could not be forwarded.

FIFO queues are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#arn Eventsv2EventSource#arn}

---

### Eventsv2EventSourceTags <a name="Eventsv2EventSourceTags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceTags;

Eventsv2EventSourceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. Unique per resource; keys are case sensitive. No leading or trailing whitespace (interior whitespace is allowed). |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. May be empty. No leading or trailing whitespace (interior whitespace is allowed). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key. Unique per resource; keys are case sensitive. No leading or trailing whitespace (interior whitespace is allowed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#key Eventsv2EventSource#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value. May be empty. No leading or trailing whitespace (interior whitespace is allowed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_source#value Eventsv2EventSource#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference;

new Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

---


### Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference;

new Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.putOnFailureConfiguration">putOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetAwsService">resetAwsService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetOnFailureConfiguration">resetOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetPattern">resetPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailureConfiguration` <a name="putOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.putOnFailureConfiguration"></a>

```java
public void putOnFailureConfiguration(Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.putOnFailureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

---

##### `resetAwsService` <a name="resetAwsService" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetAwsService"></a>

```java
public void resetAwsService()
```

##### `resetOnFailureConfiguration` <a name="resetOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetOnFailureConfiguration"></a>

```java
public void resetOnFailureConfiguration()
```

##### `resetPattern` <a name="resetPattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resetPattern"></a>

```java
public void resetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfiguration">onFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsServiceInput">awsServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfigurationInput">onFailureConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsService">awsService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onFailureConfiguration`<sup>Required</sup> <a name="onFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference getOnFailureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference</a>

---

##### `awsServiceInput`<sup>Optional</sup> <a name="awsServiceInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsServiceInput"></a>

```java
public java.lang.String getAwsServiceInput();
```

- *Type:* java.lang.String

---

##### `onFailureConfigurationInput`<sup>Optional</sup> <a name="onFailureConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration getOnFailureConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `awsService`<sup>Required</sup> <a name="awsService" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsService"></a>

```java
public java.lang.String getAwsService();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

---


### Eventsv2EventSourceConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationOutputReference;

new Eventsv2EventSourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putAwsServiceEventsConfiguration">putAwsServiceEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putPartnerEventsConfiguration">putPartnerEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetAwsServiceEventsConfiguration">resetAwsServiceEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetPartnerEventsConfiguration">resetPartnerEventsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsServiceEventsConfiguration` <a name="putAwsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putAwsServiceEventsConfiguration"></a>

```java
public void putAwsServiceEventsConfiguration(Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putAwsServiceEventsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

---

##### `putPartnerEventsConfiguration` <a name="putPartnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putPartnerEventsConfiguration"></a>

```java
public void putPartnerEventsConfiguration(Eventsv2EventSourceConfigurationPartnerEventsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putPartnerEventsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

---

##### `resetAwsServiceEventsConfiguration` <a name="resetAwsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetAwsServiceEventsConfiguration"></a>

```java
public void resetAwsServiceEventsConfiguration()
```

##### `resetPartnerEventsConfiguration` <a name="resetPartnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetPartnerEventsConfiguration"></a>

```java
public void resetPartnerEventsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfiguration">awsServiceEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfiguration">partnerEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfigurationInput">awsServiceEventsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfigurationInput">partnerEventsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsServiceEventsConfiguration`<sup>Required</sup> <a name="awsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference getAwsServiceEventsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference</a>

---

##### `partnerEventsConfiguration`<sup>Required</sup> <a name="partnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference getPartnerEventsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference</a>

---

##### `awsServiceEventsConfigurationInput`<sup>Optional</sup> <a name="awsServiceEventsConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration getAwsServiceEventsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

---

##### `partnerEventsConfigurationInput`<sup>Optional</sup> <a name="partnerEventsConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationPartnerEventsConfiguration getPartnerEventsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a>

---


### Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference;

new Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a>

---


### Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference;

new Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.putOnFailureConfiguration">putOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetOnFailureConfiguration">resetOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPartnerBusKmsKeyIdentifier">resetPartnerBusKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPartnerEventSourceArn">resetPartnerEventSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPattern">resetPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailureConfiguration` <a name="putOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.putOnFailureConfiguration"></a>

```java
public void putOnFailureConfiguration(Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.putOnFailureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a>

---

##### `resetOnFailureConfiguration` <a name="resetOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetOnFailureConfiguration"></a>

```java
public void resetOnFailureConfiguration()
```

##### `resetPartnerBusKmsKeyIdentifier` <a name="resetPartnerBusKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPartnerBusKmsKeyIdentifier"></a>

```java
public void resetPartnerBusKmsKeyIdentifier()
```

##### `resetPartnerEventSourceArn` <a name="resetPartnerEventSourceArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPartnerEventSourceArn"></a>

```java
public void resetPartnerEventSourceArn()
```

##### `resetPattern` <a name="resetPattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resetPattern"></a>

```java
public void resetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfiguration">onFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfigurationInput">onFailureConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifierInput">partnerBusKmsKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArnInput">partnerEventSourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifier">partnerBusKmsKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArn">partnerEventSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onFailureConfiguration`<sup>Required</sup> <a name="onFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference getOnFailureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference</a>

---

##### `onFailureConfigurationInput`<sup>Optional</sup> <a name="onFailureConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration getOnFailureConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a>

---

##### `partnerBusKmsKeyIdentifierInput`<sup>Optional</sup> <a name="partnerBusKmsKeyIdentifierInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifierInput"></a>

```java
public java.lang.String getPartnerBusKmsKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `partnerEventSourceArnInput`<sup>Optional</sup> <a name="partnerEventSourceArnInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArnInput"></a>

```java
public java.lang.String getPartnerEventSourceArnInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `partnerBusKmsKeyIdentifier`<sup>Required</sup> <a name="partnerBusKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifier"></a>

```java
public java.lang.String getPartnerBusKmsKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `partnerEventSourceArn`<sup>Required</sup> <a name="partnerEventSourceArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArn"></a>

```java
public java.lang.String getPartnerEventSourceArn();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationPartnerEventsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

---


### Eventsv2EventSourceTagsList <a name="Eventsv2EventSourceTagsList" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceTagsList;

new Eventsv2EventSourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.get"></a>

```java
public Eventsv2EventSourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Eventsv2EventSourceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>>

---


### Eventsv2EventSourceTagsOutputReference <a name="Eventsv2EventSourceTagsOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceTagsOutputReference;

new Eventsv2EventSourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>

---



