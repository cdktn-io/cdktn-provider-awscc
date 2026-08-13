# `eventsEventBus` Submodule <a name="`eventsEventBus` Submodule" id="@cdktn/provider-awscc.eventsEventBus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsEventBus <a name="EventsEventBus" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus awscc_events_event_bus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBus;

EventsEventBus.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .deadLetterConfig(EventsEventBusDeadLetterConfig)
//  .description(java.lang.String)
//  .eventSourceName(java.lang.String)
//  .kmsKeyIdentifier(java.lang.String)
//  .logConfig(EventsEventBusLogConfig)
//  .policy(java.lang.String)
//  .tags(IResolvable|java.util.List<EventsEventBusTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a></code> | Dead Letter Queue for the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.eventSourceName">eventSourceName</a></code> | <code>java.lang.String</code> | If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | Kms Key Identifier used to encrypt events at rest in the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a></code> | The logging configuration settings for vended logs. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | A JSON string that describes the permission policy statement for the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>></code> | Any tags assigned to the event bus. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#name EventsEventBus#name}

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.deadLetterConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a>

Dead Letter Queue for the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#dead_letter_config EventsEventBus#dead_letter_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#description EventsEventBus#description}

---

##### `eventSourceName`<sup>Optional</sup> <a name="eventSourceName" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.eventSourceName"></a>

- *Type:* java.lang.String

If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#event_source_name EventsEventBus#event_source_name}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* java.lang.String

Kms Key Identifier used to encrypt events at rest in the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#kms_key_identifier EventsEventBus#kms_key_identifier}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a>

The logging configuration settings for vended logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#log_config EventsEventBus#log_config}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

A JSON string that describes the permission policy statement for the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#policy EventsEventBus#policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>>

Any tags assigned to the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#tags EventsEventBus#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putDeadLetterConfig">putDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetDeadLetterConfig">resetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetEventSourceName">resetEventSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeadLetterConfig` <a name="putDeadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putDeadLetterConfig"></a>

```java
public void putDeadLetterConfig(EventsEventBusDeadLetterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putLogConfig"></a>

```java
public void putLogConfig(EventsEventBusLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EventsEventBusTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>>

---

##### `resetDeadLetterConfig` <a name="resetDeadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetDeadLetterConfig"></a>

```java
public void resetDeadLetterConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEventSourceName` <a name="resetEventSourceName" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetEventSourceName"></a>

```java
public void resetEventSourceName()
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetKmsKeyIdentifier"></a>

```java
public void resetKmsKeyIdentifier()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EventsEventBus resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isConstruct"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBus;

EventsEventBus.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBus;

EventsEventBus.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBus;

EventsEventBus.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBus;

EventsEventBus.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventsEventBus.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EventsEventBus resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventsEventBus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventsEventBus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EventsEventBus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference">EventsEventBusDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference">EventsEventBusLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList">EventsEventBusTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.deadLetterConfigInput">deadLetterConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.eventSourceNameInput">eventSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.logConfigInput">logConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.eventSourceName">eventSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.deadLetterConfig"></a>

```java
public EventsEventBusDeadLetterConfigOutputReference getDeadLetterConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference">EventsEventBusDeadLetterConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.logConfig"></a>

```java
public EventsEventBusLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference">EventsEventBusLogConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tags"></a>

```java
public EventsEventBusTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList">EventsEventBusTagsList</a>

---

##### `deadLetterConfigInput`<sup>Optional</sup> <a name="deadLetterConfigInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.deadLetterConfigInput"></a>

```java
public IResolvable|EventsEventBusDeadLetterConfig getDeadLetterConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventSourceNameInput`<sup>Optional</sup> <a name="eventSourceNameInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.eventSourceNameInput"></a>

```java
public java.lang.String getEventSourceNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.kmsKeyIdentifierInput"></a>

```java
public java.lang.String getKmsKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.logConfigInput"></a>

```java
public IResolvable|EventsEventBusLogConfig getLogConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EventsEventBusTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `eventSourceName`<sup>Required</sup> <a name="eventSourceName" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.eventSourceName"></a>

```java
public java.lang.String getEventSourceName();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBus.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventsEventBusConfig <a name="EventsEventBusConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBusConfig;

EventsEventBusConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .deadLetterConfig(EventsEventBusDeadLetterConfig)
//  .description(java.lang.String)
//  .eventSourceName(java.lang.String)
//  .kmsKeyIdentifier(java.lang.String)
//  .logConfig(EventsEventBusLogConfig)
//  .policy(java.lang.String)
//  .tags(IResolvable|java.util.List<EventsEventBusTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a></code> | Dead Letter Queue for the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.eventSourceName">eventSourceName</a></code> | <code>java.lang.String</code> | If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | Kms Key Identifier used to encrypt events at rest in the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a></code> | The logging configuration settings for vended logs. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | A JSON string that describes the permission policy statement for the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>></code> | Any tags assigned to the event bus. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#name EventsEventBus#name}

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.deadLetterConfig"></a>

```java
public EventsEventBusDeadLetterConfig getDeadLetterConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a>

Dead Letter Queue for the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#dead_letter_config EventsEventBus#dead_letter_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#description EventsEventBus#description}

---

##### `eventSourceName`<sup>Optional</sup> <a name="eventSourceName" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.eventSourceName"></a>

```java
public java.lang.String getEventSourceName();
```

- *Type:* java.lang.String

If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#event_source_name EventsEventBus#event_source_name}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

Kms Key Identifier used to encrypt events at rest in the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#kms_key_identifier EventsEventBus#kms_key_identifier}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.logConfig"></a>

```java
public EventsEventBusLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a>

The logging configuration settings for vended logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#log_config EventsEventBus#log_config}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

A JSON string that describes the permission policy statement for the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#policy EventsEventBus#policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EventsEventBusTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>>

Any tags assigned to the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#tags EventsEventBus#tags}

---

### EventsEventBusDeadLetterConfig <a name="EventsEventBusDeadLetterConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBusDeadLetterConfig;

EventsEventBusDeadLetterConfig.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#arn EventsEventBus#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#arn EventsEventBus#arn}.

---

### EventsEventBusLogConfig <a name="EventsEventBusLogConfig" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBusLogConfig;

EventsEventBusLogConfig.builder()
//  .includeDetail(java.lang.String)
//  .level(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig.property.includeDetail">includeDetail</a></code> | <code>java.lang.String</code> | Configures whether or not to include event detail, input transformer details, target properties, and target input in the applicable log messages. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig.property.level">level</a></code> | <code>java.lang.String</code> | Configures the log level of the EventBus and determines which log messages are sent to Ingestion Hub for delivery. |

---

##### `includeDetail`<sup>Optional</sup> <a name="includeDetail" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig.property.includeDetail"></a>

```java
public java.lang.String getIncludeDetail();
```

- *Type:* java.lang.String

Configures whether or not to include event detail, input transformer details, target properties, and target input in the applicable log messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#include_detail EventsEventBus#include_detail}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Configures the log level of the EventBus and determines which log messages are sent to Ingestion Hub for delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#level EventsEventBus#level}

---

### EventsEventBusTags <a name="EventsEventBusTags" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBusTags;

EventsEventBusTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#key EventsEventBus#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#value EventsEventBus#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#key EventsEventBus#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_event_bus#value EventsEventBus#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventsEventBusDeadLetterConfigOutputReference <a name="EventsEventBusDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBusDeadLetterConfigOutputReference;

new EventsEventBusDeadLetterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsEventBusDeadLetterConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusDeadLetterConfig">EventsEventBusDeadLetterConfig</a>

---


### EventsEventBusLogConfigOutputReference <a name="EventsEventBusLogConfigOutputReference" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBusLogConfigOutputReference;

new EventsEventBusLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resetIncludeDetail">resetIncludeDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resetLevel">resetLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeDetail` <a name="resetIncludeDetail" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resetIncludeDetail"></a>

```java
public void resetIncludeDetail()
```

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.resetLevel"></a>

```java
public void resetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.includeDetailInput">includeDetailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.includeDetail">includeDetail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeDetailInput`<sup>Optional</sup> <a name="includeDetailInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.includeDetailInput"></a>

```java
public java.lang.String getIncludeDetailInput();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `includeDetail`<sup>Required</sup> <a name="includeDetail" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.includeDetail"></a>

```java
public java.lang.String getIncludeDetail();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsEventBusLogConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusLogConfig">EventsEventBusLogConfig</a>

---


### EventsEventBusTagsList <a name="EventsEventBusTagsList" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBusTagsList;

new EventsEventBusTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.get"></a>

```java
public EventsEventBusTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventsEventBusTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>>

---


### EventsEventBusTagsOutputReference <a name="EventsEventBusTagsOutputReference" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus.EventsEventBusTagsOutputReference;

new EventsEventBusTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsEventBus.EventsEventBusTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsEventBusTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBus.EventsEventBusTags">EventsEventBusTags</a>

---



