# `eventsv2EventSource` Submodule <a name="`eventsv2EventSource` Submodule" id="@cdktn/provider-awscc.eventsv2EventSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eventsv2EventSource <a name="Eventsv2EventSource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source awscc_eventsv2_event_source}.

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
//  .details(Eventsv2EventSourceDetails)
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
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a></code> | The event source configuration. Specify exactly one of AwsServiceEventsConfiguration, PartnerEventsConfiguration or WebhookEventsConfiguration. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | The ARN of the custom event bus the event source forwards onto. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the event source. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the event source. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a></code> | Values EventBridge generated for the event source, such as a webhook's URL and the ARN of its secret. |
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

The event source configuration. Specify exactly one of AwsServiceEventsConfiguration, PartnerEventsConfiguration or WebhookEventsConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#configuration Eventsv2EventSource#configuration}

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.eventBusArn"></a>

- *Type:* java.lang.String

The ARN of the custom event bus the event source forwards onto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#event_bus_arn Eventsv2EventSource#event_bus_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the event source.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. Names cannot begin with the reserved aws. prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#name Eventsv2EventSource#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the event source. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#description Eventsv2EventSource#description}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a>

Values EventBridge generated for the event source, such as a webhook's URL and the ARN of its secret.

Absent for event source types that have no generated values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#details Eventsv2EventSource#details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>>

The tags assigned to the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#tags Eventsv2EventSource#tags}

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
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetDetails">resetDetails</a></code> | *No description.* |
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

##### `putDetails` <a name="putDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putDetails"></a>

```java
public void putDetails(Eventsv2EventSourceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a>

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

##### `resetDetails` <a name="resetDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.resetDetails"></a>

```java
public void resetDetails()
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

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.details">details</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference">Eventsv2EventSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.eventSourceArn">eventSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.revoked">revoked</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTagsList">Eventsv2EventSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.detailsInput">detailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a></code> | *No description.* |
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

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.details"></a>

```java
public Eventsv2EventSourceDetailsOutputReference getDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference">Eventsv2EventSourceDetailsOutputReference</a>

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

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSource.property.detailsInput"></a>

```java
public IResolvable|Eventsv2EventSourceDetails getDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a>

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
//  .details(Eventsv2EventSourceDetails)
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
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration">Eventsv2EventSourceConfiguration</a></code> | The event source configuration. Specify exactly one of AwsServiceEventsConfiguration, PartnerEventsConfiguration or WebhookEventsConfiguration. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | The ARN of the custom event bus the event source forwards onto. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the event source. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the event source. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.details">details</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a></code> | Values EventBridge generated for the event source, such as a webhook's URL and the ARN of its secret. |
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

The event source configuration. Specify exactly one of AwsServiceEventsConfiguration, PartnerEventsConfiguration or WebhookEventsConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#configuration Eventsv2EventSource#configuration}

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

The ARN of the custom event bus the event source forwards onto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#event_bus_arn Eventsv2EventSource#event_bus_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the event source.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. Names cannot begin with the reserved aws. prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#name Eventsv2EventSource#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the event source. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#description Eventsv2EventSource#description}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.details"></a>

```java
public Eventsv2EventSourceDetails getDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a>

Values EventBridge generated for the event source, such as a webhook's URL and the ARN of its secret.

Absent for event source types that have no generated values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#details Eventsv2EventSource#details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Eventsv2EventSourceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags">Eventsv2EventSourceTags</a>>

The tags assigned to the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#tags Eventsv2EventSource#tags}

---

### Eventsv2EventSourceConfiguration <a name="Eventsv2EventSourceConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfiguration;

Eventsv2EventSourceConfiguration.builder()
//  .awsServiceEventsConfiguration(Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration)
//  .partnerEventsConfiguration(Eventsv2EventSourceConfigurationPartnerEventsConfiguration)
//  .webhookEventsConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.awsServiceEventsConfiguration">awsServiceEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a></code> | Configuration for forwarding a single AWS service's events. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.partnerEventsConfiguration">partnerEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a></code> | Configuration for forwarding a partner event source's events. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.webhookEventsConfiguration">webhookEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a></code> | Configuration for receiving events that an external provider sends to a webhook URL. |

---

##### `awsServiceEventsConfiguration`<sup>Optional</sup> <a name="awsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.awsServiceEventsConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration getAwsServiceEventsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

Configuration for forwarding a single AWS service's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#aws_service_events_configuration Eventsv2EventSource#aws_service_events_configuration}

---

##### `partnerEventsConfiguration`<sup>Optional</sup> <a name="partnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.partnerEventsConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationPartnerEventsConfiguration getPartnerEventsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

Configuration for forwarding a partner event source's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#partner_events_configuration Eventsv2EventSource#partner_events_configuration}

---

##### `webhookEventsConfiguration`<sup>Optional</sup> <a name="webhookEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfiguration.property.webhookEventsConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfiguration getWebhookEventsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a>

Configuration for receiving events that an external provider sends to a webhook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#webhook_events_configuration Eventsv2EventSource#webhook_events_configuration}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#aws_service Eventsv2EventSource#aws_service}

---

##### `onFailureConfiguration`<sup>Optional</sup> <a name="onFailureConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.onFailureConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration getOnFailureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

The destination for events that could not be forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#on_failure_configuration Eventsv2EventSource#on_failure_configuration}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

A filter pattern, as a JSON string, that defines which events from the specified AWS service are forwarded to the event bus.

Do not include source, account, or region as top-level fields. If you do not specify a pattern, all events from the service are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#pattern Eventsv2EventSource#pattern}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#arn Eventsv2EventSource#arn}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#on_failure_configuration Eventsv2EventSource#on_failure_configuration}

---

##### `partnerBusKmsKeyIdentifier`<sup>Optional</sup> <a name="partnerBusKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.partnerBusKmsKeyIdentifier"></a>

```java
public java.lang.String getPartnerBusKmsKeyIdentifier();
```

- *Type:* java.lang.String

The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on the managed partner event bus.

The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an AWS owned key to encrypt events on the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#partner_bus_kms_key_identifier Eventsv2EventSource#partner_bus_kms_key_identifier}

---

##### `partnerEventSourceArn`<sup>Optional</sup> <a name="partnerEventSourceArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.partnerEventSourceArn"></a>

```java
public java.lang.String getPartnerEventSourceArn();
```

- *Type:* java.lang.String

The ARN of the partner event source to forward.

The partner owns the event source, so the ARN's account segment is empty. Changing this property replaces the event source. Because Name and EventBusArn together identify an event source, and the replacement is created before the old resource is deleted, change Name in the same update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#partner_event_source_arn Eventsv2EventSource#partner_event_source_arn}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

A filter pattern, as a JSON string, that defines which events from the specified partner event source are forwarded to the event bus.

If you do not specify a pattern, all events from the partner event source are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#pattern Eventsv2EventSource#pattern}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#arn Eventsv2EventSource#arn}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfiguration;

Eventsv2EventSourceConfigurationWebhookEventsConfiguration.builder()
//  .authConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration)
//  .deduplicationConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration)
//  .kmsKeyIdentifier(java.lang.String)
//  .logConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration)
//  .metadataHttpHeaders(java.util.List<java.lang.String>)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.authConfiguration">authConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a></code> | How the provider authenticates its requests. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.deduplicationConfiguration">deduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a></code> | Deduplicates the event source's events on the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | The AWS KMS key that encrypts the event source's secret in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a></code> | The log records Amazon EventBridge delivers for the webhook requests this event source receives. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.metadataHttpHeaders">metadataHttpHeaders</a></code> | <code>java.util.List<java.lang.String></code> | The HTTP request headers to add to each event's metadata, up to 20. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that Amazon EventBridge assumes to put the webhook's events on the event bus. |

---

##### `authConfiguration`<sup>Optional</sup> <a name="authConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.authConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration getAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a>

How the provider authenticates its requests.

Set exactly one authentication type. You can't change the type after you create the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#auth_configuration Eventsv2EventSource#auth_configuration}

---

##### `deduplicationConfiguration`<sup>Optional</sup> <a name="deduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.deduplicationConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration getDeduplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a>

Deduplicates the event source's events on the event bus.

If you do not specify a configuration, EventBridge does not deduplicate events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#deduplication_configuration Eventsv2EventSource#deduplication_configuration}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

The AWS KMS key that encrypts the event source's secret in AWS Secrets Manager.

If you do not specify a key, the secret is encrypted with the AWS managed key aws/secretsmanager. A key you specify must be an enabled customer managed key in your account and Region. Changing the key re-encrypts the secret under the new key. The previous key can still decrypt the stored versions until the credential is next rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#kms_key_identifier Eventsv2EventSource#kms_key_identifier}

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.logConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a>

The log records Amazon EventBridge delivers for the webhook requests this event source receives.

If you do not specify a configuration, EventBridge delivers no logs. Logs are delivered to the destinations you configure with Amazon CloudWatch Logs vended log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#log_configuration Eventsv2EventSource#log_configuration}

---

##### `metadataHttpHeaders`<sup>Optional</sup> <a name="metadataHttpHeaders" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.metadataHttpHeaders"></a>

```java
public java.util.List<java.lang.String> getMetadataHttpHeaders();
```

- *Type:* java.util.List<java.lang.String>

The HTTP request headers to add to each event's metadata, up to 20.

Header names are case-insensitive and cannot repeat. Amazon EventBridge adds each header under its lowercase name. If you do not specify headers, EventBridge adds none. You cannot list headers that carry credentials or describe the network path, or the header that carries the static token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#metadata_http_headers Eventsv2EventSource#metadata_http_headers}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that Amazon EventBridge assumes to put the webhook's events on the event bus.

The role must belong to the calling account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#role_arn Eventsv2EventSource#role_arn}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration;

Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.builder()
//  .basicHttpAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration)
//  .hmacAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration)
//  .staticTokenAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.basicHttpAuthConfiguration">basicHttpAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a></code> | The provider sends HTTP Basic authentication credentials. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.hmacAuthConfiguration">hmacAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a></code> | The provider signs each request with a hash-based message authentication code (HMAC) of the secret. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.staticTokenAuthConfiguration">staticTokenAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a></code> | The provider sends the secret as the value of an HTTP header. |

---

##### `basicHttpAuthConfiguration`<sup>Optional</sup> <a name="basicHttpAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.basicHttpAuthConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration getBasicHttpAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a>

The provider sends HTTP Basic authentication credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#basic_http_auth_configuration Eventsv2EventSource#basic_http_auth_configuration}

---

##### `hmacAuthConfiguration`<sup>Optional</sup> <a name="hmacAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.hmacAuthConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration getHmacAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a>

The provider signs each request with a hash-based message authentication code (HMAC) of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#hmac_auth_configuration Eventsv2EventSource#hmac_auth_configuration}

---

##### `staticTokenAuthConfiguration`<sup>Optional</sup> <a name="staticTokenAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.property.staticTokenAuthConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration getStaticTokenAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a>

The provider sends the secret as the value of an HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#static_token_auth_configuration Eventsv2EventSource#static_token_auth_configuration}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration;

Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.builder()
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.property.password">password</a></code> | <code>java.lang.String</code> | The password. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.property.username">username</a></code> | <code>java.lang.String</code> | The username. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password.

Set on create only: changing this value in a template has no effect. To change the password, call RotateWebhookCredentials. The username and the webhook URL do not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#password Eventsv2EventSource#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username.

Cannot contain a colon or whitespace. Changing the username requires replacing the event source, which also requires a new Name and gives the event source a new webhook URL. RotateWebhookCredentials cannot change the username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#username Eventsv2EventSource#username}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration;

Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.builder()
//  .algorithm(java.lang.String)
//  .delimiter(java.lang.String)
//  .encoding(java.lang.String)
//  .messageIdHttpHeader(java.lang.String)
//  .secretEncoding(java.lang.String)
//  .secretValue(java.lang.String)
//  .signatureHttpHeader(java.lang.String)
//  .signaturePrefix(java.lang.String)
//  .signedMessageComposition(java.lang.String)
//  .timestampHttpHeader(java.lang.String)
//  .timestampPrefix(java.lang.String)
//  .timestampToleranceInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | The hash algorithm the provider uses to compute the signature. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | The separator between parts of the signature header value, for example a comma for a header value of t=1727816400,v1=<signature>, or a space when the header carries several signatures. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.encoding">encoding</a></code> | <code>java.lang.String</code> | How the provider encodes the signature in the header. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.messageIdHttpHeader">messageIdHttpHeader</a></code> | <code>java.lang.String</code> | The name of the header that carries the message ID. Required when SignedMessageComposition is MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.secretEncoding">secretEncoding</a></code> | <code>java.lang.String</code> | How the secret is encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.secretValue">secretValue</a></code> | <code>java.lang.String</code> | The signing key shared with the provider. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signatureHttpHeader">signatureHttpHeader</a></code> | <code>java.lang.String</code> | The name of the header that carries the signature, for example X-Hub-Signature-256. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signaturePrefix">signaturePrefix</a></code> | <code>java.lang.String</code> | The text that precedes the signature in the header value, for example sha256=. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signedMessageComposition">signedMessageComposition</a></code> | <code>java.lang.String</code> | How the provider assembles the message it signs from the request. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampHttpHeader">timestampHttpHeader</a></code> | <code>java.lang.String</code> | The name of the header that carries the request timestamp. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampPrefix">timestampPrefix</a></code> | <code>java.lang.String</code> | The text that precedes the timestamp in the header value, for example t=. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampToleranceInSeconds">timestampToleranceInSeconds</a></code> | <code>java.lang.Number</code> | The maximum difference, in seconds, allowed between the request timestamp and the time EventBridge receives the request. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

The hash algorithm the provider uses to compute the signature.

Valid values:

* SHA256 - SHA-256.
* SHA1 - SHA-1. Not recommended. Use SHA1 only for interoperability with a provider that cannot sign with SHA-256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#algorithm Eventsv2EventSource#algorithm}

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

The separator between parts of the signature header value, for example a comma for a header value of t=1727816400,v1=<signature>, or a space when the header carries several signatures.

Required when TimestampHttpHeader is the same header as SignatureHttpHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#delimiter Eventsv2EventSource#delimiter}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

How the provider encodes the signature in the header.

Valid values:

* HEX - Hexadecimal.
* BASE64 - Base64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#encoding Eventsv2EventSource#encoding}

---

##### `messageIdHttpHeader`<sup>Optional</sup> <a name="messageIdHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.messageIdHttpHeader"></a>

```java
public java.lang.String getMessageIdHttpHeader();
```

- *Type:* java.lang.String

The name of the header that carries the message ID. Required when SignedMessageComposition is MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#message_id_http_header Eventsv2EventSource#message_id_http_header}

---

##### `secretEncoding`<sup>Optional</sup> <a name="secretEncoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.secretEncoding"></a>

```java
public java.lang.String getSecretEncoding();
```

- *Type:* java.lang.String

How the secret is encoded.

RAW uses the secret's characters as the signing key. BASE64 decodes the secret first, as required by providers that issue Base64-encoded signing keys, such as those following the Standard Webhooks specification. If you do not specify an encoding, EventBridge uses RAW. Changing the encoding replaces the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#secret_encoding Eventsv2EventSource#secret_encoding}

---

##### `secretValue`<sup>Optional</sup> <a name="secretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.secretValue"></a>

```java
public java.lang.String getSecretValue();
```

- *Type:* java.lang.String

The signing key shared with the provider.

If you do not specify a key, EventBridge generates one. EventBridge stores the key only in AWS Secrets Manager and never returns it. Set on create only: changing this value in a template has no effect. To change the key, call RotateWebhookCredentials. The webhook URL does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#secret_value Eventsv2EventSource#secret_value}

---

##### `signatureHttpHeader`<sup>Optional</sup> <a name="signatureHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signatureHttpHeader"></a>

```java
public java.lang.String getSignatureHttpHeader();
```

- *Type:* java.lang.String

The name of the header that carries the signature, for example X-Hub-Signature-256.

When TimestampHttpHeader names the same header, Delimiter, SignaturePrefix and TimestampPrefix are all required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#signature_http_header Eventsv2EventSource#signature_http_header}

---

##### `signaturePrefix`<sup>Optional</sup> <a name="signaturePrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signaturePrefix"></a>

```java
public java.lang.String getSignaturePrefix();
```

- *Type:* java.lang.String

The text that precedes the signature in the header value, for example sha256=.

Required when TimestampHttpHeader is the same header as SignatureHttpHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#signature_prefix Eventsv2EventSource#signature_prefix}

---

##### `signedMessageComposition`<sup>Optional</sup> <a name="signedMessageComposition" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.signedMessageComposition"></a>

```java
public java.lang.String getSignedMessageComposition();
```

- *Type:* java.lang.String

How the provider assembles the message it signs from the request.

Valid values:

* BODY - The request body alone.
* TIMESTAMP_DOT_BODY - <timestamp>.<body>. Requires TimestampHttpHeader.
* MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY - <messageId>.<timestamp>.<body>, as in the Standard Webhooks specification. Requires TimestampHttpHeader and MessageIdHttpHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#signed_message_composition Eventsv2EventSource#signed_message_composition}

---

##### `timestampHttpHeader`<sup>Optional</sup> <a name="timestampHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampHttpHeader"></a>

```java
public java.lang.String getTimestampHttpHeader();
```

- *Type:* java.lang.String

The name of the header that carries the request timestamp.

Required when SignedMessageComposition is TIMESTAMP_DOT_BODY or MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY, or when TimestampToleranceInSeconds is set. When it names the same header as SignatureHttpHeader, Delimiter, SignaturePrefix and TimestampPrefix are all required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#timestamp_http_header Eventsv2EventSource#timestamp_http_header}

---

##### `timestampPrefix`<sup>Optional</sup> <a name="timestampPrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampPrefix"></a>

```java
public java.lang.String getTimestampPrefix();
```

- *Type:* java.lang.String

The text that precedes the timestamp in the header value, for example t=.

Required when TimestampHttpHeader is the same header as SignatureHttpHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#timestamp_prefix Eventsv2EventSource#timestamp_prefix}

---

##### `timestampToleranceInSeconds`<sup>Optional</sup> <a name="timestampToleranceInSeconds" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.property.timestampToleranceInSeconds"></a>

```java
public java.lang.Number getTimestampToleranceInSeconds();
```

- *Type:* java.lang.Number

The maximum difference, in seconds, allowed between the request timestamp and the time EventBridge receives the request.

Requests outside this window are rejected. If you do not specify a tolerance, EventBridge uses 300 seconds. Requires TimestampHttpHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#timestamp_tolerance_in_seconds Eventsv2EventSource#timestamp_tolerance_in_seconds}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration;

Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.builder()
//  .secretValue(java.lang.String)
//  .tokenHttpHeader(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.property.secretValue">secretValue</a></code> | <code>java.lang.String</code> | The token the provider sends in the header. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.property.tokenHttpHeader">tokenHttpHeader</a></code> | <code>java.lang.String</code> | The name of the header that carries the secret, for example X-Webhook-Secret. |

---

##### `secretValue`<sup>Optional</sup> <a name="secretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.property.secretValue"></a>

```java
public java.lang.String getSecretValue();
```

- *Type:* java.lang.String

The token the provider sends in the header.

If you do not specify a token, Amazon EventBridge generates one. EventBridge stores the token only in AWS Secrets Manager and never returns it. Set on create only: changing this value in a template has no effect. To change the token, call RotateWebhookCredentials. The webhook URL does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#secret_value Eventsv2EventSource#secret_value}

---

##### `tokenHttpHeader`<sup>Optional</sup> <a name="tokenHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.property.tokenHttpHeader"></a>

```java
public java.lang.String getTokenHttpHeader();
```

- *Type:* java.lang.String

The name of the header that carries the secret, for example X-Webhook-Secret.

Must be a valid header name as defined in RFC 7230.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#token_http_header Eventsv2EventSource#token_http_header}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration;

Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration.builder()
//  .deduplicationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration.property.deduplicationType">deduplicationType</a></code> | <code>java.lang.String</code> | How EventBridge detects duplicate events. |

---

##### `deduplicationType`<sup>Optional</sup> <a name="deduplicationType" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration.property.deduplicationType"></a>

```java
public java.lang.String getDeduplicationType();
```

- *Type:* java.lang.String

How EventBridge detects duplicate events.

Valid values:

* CONTENT_BASED - Detects duplicates by a hash of the event content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#deduplication_type Eventsv2EventSource#deduplication_type}

---

### Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration;

Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.builder()
//  .includePayload(java.lang.String)
//  .level(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.property.includePayload">includePayload</a></code> | <code>java.lang.String</code> | Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.property.level">level</a></code> | <code>java.lang.String</code> | The minimum log level: OFF (no logging), ERROR, or INFO. |

---

##### `includePayload`<sup>Optional</sup> <a name="includePayload" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.property.includePayload"></a>

```java
public java.lang.String getIncludePayload();
```

- *Type:* java.lang.String

Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records.

The default is ON_ERROR_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#include_payload Eventsv2EventSource#include_payload}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

The minimum log level: OFF (no logging), ERROR, or INFO.

Records below this level are not emitted. The default is OFF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#level Eventsv2EventSource#level}

---

### Eventsv2EventSourceDetails <a name="Eventsv2EventSourceDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceDetails;

Eventsv2EventSourceDetails.builder()
//  .webhookDetails(Eventsv2EventSourceDetailsWebhookDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails.property.webhookDetails">webhookDetails</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a></code> | Values generated for a webhook event source. |

---

##### `webhookDetails`<sup>Optional</sup> <a name="webhookDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails.property.webhookDetails"></a>

```java
public Eventsv2EventSourceDetailsWebhookDetails getWebhookDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a>

Values generated for a webhook event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#webhook_details Eventsv2EventSource#webhook_details}

---

### Eventsv2EventSourceDetailsWebhookDetails <a name="Eventsv2EventSourceDetailsWebhookDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceDetailsWebhookDetails;

Eventsv2EventSourceDetailsWebhookDetails.builder()
    .build();
```


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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#key Eventsv2EventSource#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value. May be empty. No leading or trailing whitespace (interior whitespace is allowed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/eventsv2_event_source#value Eventsv2EventSource#value}

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
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putWebhookEventsConfiguration">putWebhookEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetAwsServiceEventsConfiguration">resetAwsServiceEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetPartnerEventsConfiguration">resetPartnerEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetWebhookEventsConfiguration">resetWebhookEventsConfiguration</a></code> | *No description.* |

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

##### `putWebhookEventsConfiguration` <a name="putWebhookEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putWebhookEventsConfiguration"></a>

```java
public void putWebhookEventsConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.putWebhookEventsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a>

---

##### `resetAwsServiceEventsConfiguration` <a name="resetAwsServiceEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetAwsServiceEventsConfiguration"></a>

```java
public void resetAwsServiceEventsConfiguration()
```

##### `resetPartnerEventsConfiguration` <a name="resetPartnerEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetPartnerEventsConfiguration"></a>

```java
public void resetPartnerEventsConfiguration()
```

##### `resetWebhookEventsConfiguration` <a name="resetWebhookEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.resetWebhookEventsConfiguration"></a>

```java
public void resetWebhookEventsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfiguration">awsServiceEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfiguration">partnerEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.webhookEventsConfiguration">webhookEventsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfigurationInput">awsServiceEventsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration">Eventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfigurationInput">partnerEventsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationPartnerEventsConfiguration">Eventsv2EventSourceConfigurationPartnerEventsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.webhookEventsConfigurationInput">webhookEventsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a></code> | *No description.* |
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

##### `webhookEventsConfiguration`<sup>Required</sup> <a name="webhookEventsConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.webhookEventsConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference getWebhookEventsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference</a>

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

##### `webhookEventsConfigurationInput`<sup>Optional</sup> <a name="webhookEventsConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationOutputReference.property.webhookEventsConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfiguration getWebhookEventsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a>

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


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetMessageIdHttpHeader">resetMessageIdHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSecretEncoding">resetSecretEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSecretValue">resetSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignatureHttpHeader">resetSignatureHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignaturePrefix">resetSignaturePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignedMessageComposition">resetSignedMessageComposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampHttpHeader">resetTimestampHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampPrefix">resetTimestampPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampToleranceInSeconds">resetTimestampToleranceInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetMessageIdHttpHeader` <a name="resetMessageIdHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetMessageIdHttpHeader"></a>

```java
public void resetMessageIdHttpHeader()
```

##### `resetSecretEncoding` <a name="resetSecretEncoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSecretEncoding"></a>

```java
public void resetSecretEncoding()
```

##### `resetSecretValue` <a name="resetSecretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSecretValue"></a>

```java
public void resetSecretValue()
```

##### `resetSignatureHttpHeader` <a name="resetSignatureHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignatureHttpHeader"></a>

```java
public void resetSignatureHttpHeader()
```

##### `resetSignaturePrefix` <a name="resetSignaturePrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignaturePrefix"></a>

```java
public void resetSignaturePrefix()
```

##### `resetSignedMessageComposition` <a name="resetSignedMessageComposition" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetSignedMessageComposition"></a>

```java
public void resetSignedMessageComposition()
```

##### `resetTimestampHttpHeader` <a name="resetTimestampHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampHttpHeader"></a>

```java
public void resetTimestampHttpHeader()
```

##### `resetTimestampPrefix` <a name="resetTimestampPrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampPrefix"></a>

```java
public void resetTimestampPrefix()
```

##### `resetTimestampToleranceInSeconds` <a name="resetTimestampToleranceInSeconds" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resetTimestampToleranceInSeconds"></a>

```java
public void resetTimestampToleranceInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.messageIdHttpHeaderInput">messageIdHttpHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretEncodingInput">secretEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretValueInput">secretValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signatureHttpHeaderInput">signatureHttpHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signaturePrefixInput">signaturePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signedMessageCompositionInput">signedMessageCompositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampHttpHeaderInput">timestampHttpHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampPrefixInput">timestampPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampToleranceInSecondsInput">timestampToleranceInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.messageIdHttpHeader">messageIdHttpHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretEncoding">secretEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretValue">secretValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signatureHttpHeader">signatureHttpHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signaturePrefix">signaturePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signedMessageComposition">signedMessageComposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampHttpHeader">timestampHttpHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampPrefix">timestampPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampToleranceInSeconds">timestampToleranceInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `messageIdHttpHeaderInput`<sup>Optional</sup> <a name="messageIdHttpHeaderInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.messageIdHttpHeaderInput"></a>

```java
public java.lang.String getMessageIdHttpHeaderInput();
```

- *Type:* java.lang.String

---

##### `secretEncodingInput`<sup>Optional</sup> <a name="secretEncodingInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretEncodingInput"></a>

```java
public java.lang.String getSecretEncodingInput();
```

- *Type:* java.lang.String

---

##### `secretValueInput`<sup>Optional</sup> <a name="secretValueInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretValueInput"></a>

```java
public java.lang.String getSecretValueInput();
```

- *Type:* java.lang.String

---

##### `signatureHttpHeaderInput`<sup>Optional</sup> <a name="signatureHttpHeaderInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signatureHttpHeaderInput"></a>

```java
public java.lang.String getSignatureHttpHeaderInput();
```

- *Type:* java.lang.String

---

##### `signaturePrefixInput`<sup>Optional</sup> <a name="signaturePrefixInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signaturePrefixInput"></a>

```java
public java.lang.String getSignaturePrefixInput();
```

- *Type:* java.lang.String

---

##### `signedMessageCompositionInput`<sup>Optional</sup> <a name="signedMessageCompositionInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signedMessageCompositionInput"></a>

```java
public java.lang.String getSignedMessageCompositionInput();
```

- *Type:* java.lang.String

---

##### `timestampHttpHeaderInput`<sup>Optional</sup> <a name="timestampHttpHeaderInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampHttpHeaderInput"></a>

```java
public java.lang.String getTimestampHttpHeaderInput();
```

- *Type:* java.lang.String

---

##### `timestampPrefixInput`<sup>Optional</sup> <a name="timestampPrefixInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampPrefixInput"></a>

```java
public java.lang.String getTimestampPrefixInput();
```

- *Type:* java.lang.String

---

##### `timestampToleranceInSecondsInput`<sup>Optional</sup> <a name="timestampToleranceInSecondsInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampToleranceInSecondsInput"></a>

```java
public java.lang.Number getTimestampToleranceInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `messageIdHttpHeader`<sup>Required</sup> <a name="messageIdHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.messageIdHttpHeader"></a>

```java
public java.lang.String getMessageIdHttpHeader();
```

- *Type:* java.lang.String

---

##### `secretEncoding`<sup>Required</sup> <a name="secretEncoding" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretEncoding"></a>

```java
public java.lang.String getSecretEncoding();
```

- *Type:* java.lang.String

---

##### `secretValue`<sup>Required</sup> <a name="secretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretValue"></a>

```java
public java.lang.String getSecretValue();
```

- *Type:* java.lang.String

---

##### `signatureHttpHeader`<sup>Required</sup> <a name="signatureHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signatureHttpHeader"></a>

```java
public java.lang.String getSignatureHttpHeader();
```

- *Type:* java.lang.String

---

##### `signaturePrefix`<sup>Required</sup> <a name="signaturePrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signaturePrefix"></a>

```java
public java.lang.String getSignaturePrefix();
```

- *Type:* java.lang.String

---

##### `signedMessageComposition`<sup>Required</sup> <a name="signedMessageComposition" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signedMessageComposition"></a>

```java
public java.lang.String getSignedMessageComposition();
```

- *Type:* java.lang.String

---

##### `timestampHttpHeader`<sup>Required</sup> <a name="timestampHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampHttpHeader"></a>

```java
public java.lang.String getTimestampHttpHeader();
```

- *Type:* java.lang.String

---

##### `timestampPrefix`<sup>Required</sup> <a name="timestampPrefix" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampPrefix"></a>

```java
public java.lang.String getTimestampPrefix();
```

- *Type:* java.lang.String

---

##### `timestampToleranceInSeconds`<sup>Required</sup> <a name="timestampToleranceInSeconds" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampToleranceInSeconds"></a>

```java
public java.lang.Number getTimestampToleranceInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putBasicHttpAuthConfiguration">putBasicHttpAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putHmacAuthConfiguration">putHmacAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putStaticTokenAuthConfiguration">putStaticTokenAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetBasicHttpAuthConfiguration">resetBasicHttpAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetHmacAuthConfiguration">resetHmacAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetStaticTokenAuthConfiguration">resetStaticTokenAuthConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicHttpAuthConfiguration` <a name="putBasicHttpAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putBasicHttpAuthConfiguration"></a>

```java
public void putBasicHttpAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putBasicHttpAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a>

---

##### `putHmacAuthConfiguration` <a name="putHmacAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putHmacAuthConfiguration"></a>

```java
public void putHmacAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putHmacAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a>

---

##### `putStaticTokenAuthConfiguration` <a name="putStaticTokenAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putStaticTokenAuthConfiguration"></a>

```java
public void putStaticTokenAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.putStaticTokenAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a>

---

##### `resetBasicHttpAuthConfiguration` <a name="resetBasicHttpAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetBasicHttpAuthConfiguration"></a>

```java
public void resetBasicHttpAuthConfiguration()
```

##### `resetHmacAuthConfiguration` <a name="resetHmacAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetHmacAuthConfiguration"></a>

```java
public void resetHmacAuthConfiguration()
```

##### `resetStaticTokenAuthConfiguration` <a name="resetStaticTokenAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resetStaticTokenAuthConfiguration"></a>

```java
public void resetStaticTokenAuthConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.basicHttpAuthConfiguration">basicHttpAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.hmacAuthConfiguration">hmacAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.staticTokenAuthConfiguration">staticTokenAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.basicHttpAuthConfigurationInput">basicHttpAuthConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.hmacAuthConfigurationInput">hmacAuthConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.staticTokenAuthConfigurationInput">staticTokenAuthConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicHttpAuthConfiguration`<sup>Required</sup> <a name="basicHttpAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.basicHttpAuthConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference getBasicHttpAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference</a>

---

##### `hmacAuthConfiguration`<sup>Required</sup> <a name="hmacAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.hmacAuthConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference getHmacAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference</a>

---

##### `staticTokenAuthConfiguration`<sup>Required</sup> <a name="staticTokenAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.staticTokenAuthConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference getStaticTokenAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference</a>

---

##### `basicHttpAuthConfigurationInput`<sup>Optional</sup> <a name="basicHttpAuthConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.basicHttpAuthConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration getBasicHttpAuthConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a>

---

##### `hmacAuthConfigurationInput`<sup>Optional</sup> <a name="hmacAuthConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.hmacAuthConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration getHmacAuthConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a>

---

##### `staticTokenAuthConfigurationInput`<sup>Optional</sup> <a name="staticTokenAuthConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.staticTokenAuthConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration getStaticTokenAuthConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resetSecretValue">resetSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resetTokenHttpHeader">resetTokenHttpHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretValue` <a name="resetSecretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resetSecretValue"></a>

```java
public void resetSecretValue()
```

##### `resetTokenHttpHeader` <a name="resetTokenHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resetTokenHttpHeader"></a>

```java
public void resetTokenHttpHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.secretValueInput">secretValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.tokenHttpHeaderInput">tokenHttpHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.secretValue">secretValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.tokenHttpHeader">tokenHttpHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretValueInput`<sup>Optional</sup> <a name="secretValueInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.secretValueInput"></a>

```java
public java.lang.String getSecretValueInput();
```

- *Type:* java.lang.String

---

##### `tokenHttpHeaderInput`<sup>Optional</sup> <a name="tokenHttpHeaderInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.tokenHttpHeaderInput"></a>

```java
public java.lang.String getTokenHttpHeaderInput();
```

- *Type:* java.lang.String

---

##### `secretValue`<sup>Required</sup> <a name="secretValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.secretValue"></a>

```java
public java.lang.String getSecretValue();
```

- *Type:* java.lang.String

---

##### `tokenHttpHeader`<sup>Required</sup> <a name="tokenHttpHeader" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.tokenHttpHeader"></a>

```java
public java.lang.String getTokenHttpHeader();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resetDeduplicationType">resetDeduplicationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeduplicationType` <a name="resetDeduplicationType" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resetDeduplicationType"></a>

```java
public void resetDeduplicationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.deduplicationTypeInput">deduplicationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.deduplicationType">deduplicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deduplicationTypeInput`<sup>Optional</sup> <a name="deduplicationTypeInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.deduplicationTypeInput"></a>

```java
public java.lang.String getDeduplicationTypeInput();
```

- *Type:* java.lang.String

---

##### `deduplicationType`<sup>Required</sup> <a name="deduplicationType" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.deduplicationType"></a>

```java
public java.lang.String getDeduplicationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resetIncludePayload">resetIncludePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resetLevel">resetLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludePayload` <a name="resetIncludePayload" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resetIncludePayload"></a>

```java
public void resetIncludePayload()
```

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resetLevel"></a>

```java
public void resetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.includePayloadInput">includePayloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.includePayload">includePayload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includePayloadInput`<sup>Optional</sup> <a name="includePayloadInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.includePayloadInput"></a>

```java
public java.lang.String getIncludePayloadInput();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `includePayload`<sup>Required</sup> <a name="includePayload" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.includePayload"></a>

```java
public java.lang.String getIncludePayload();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a>

---


### Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference <a name="Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference;

new Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putAuthConfiguration">putAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putDeduplicationConfiguration">putDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetAuthConfiguration">resetAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetDeduplicationConfiguration">resetDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetMetadataHttpHeaders">resetMetadataHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthConfiguration` <a name="putAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putAuthConfiguration"></a>

```java
public void putAuthConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a>

---

##### `putDeduplicationConfiguration` <a name="putDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putDeduplicationConfiguration"></a>

```java
public void putDeduplicationConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putDeduplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a>

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putLogConfiguration"></a>

```java
public void putLogConfiguration(Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a>

---

##### `resetAuthConfiguration` <a name="resetAuthConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetAuthConfiguration"></a>

```java
public void resetAuthConfiguration()
```

##### `resetDeduplicationConfiguration` <a name="resetDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetDeduplicationConfiguration"></a>

```java
public void resetDeduplicationConfiguration()
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetKmsKeyIdentifier"></a>

```java
public void resetKmsKeyIdentifier()
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetLogConfiguration"></a>

```java
public void resetLogConfiguration()
```

##### `resetMetadataHttpHeaders` <a name="resetMetadataHttpHeaders" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetMetadataHttpHeaders"></a>

```java
public void resetMetadataHttpHeaders()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.authConfiguration">authConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.deduplicationConfiguration">deduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.authConfigurationInput">authConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.deduplicationConfigurationInput">deduplicationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.logConfigurationInput">logConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.metadataHttpHeadersInput">metadataHttpHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.metadataHttpHeaders">metadataHttpHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authConfiguration`<sup>Required</sup> <a name="authConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.authConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference getAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference</a>

---

##### `deduplicationConfiguration`<sup>Required</sup> <a name="deduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.deduplicationConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference getDeduplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference</a>

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.logConfiguration"></a>

```java
public Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference</a>

---

##### `authConfigurationInput`<sup>Optional</sup> <a name="authConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.authConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration getAuthConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a>

---

##### `deduplicationConfigurationInput`<sup>Optional</sup> <a name="deduplicationConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.deduplicationConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration getDeduplicationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a>

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.kmsKeyIdentifierInput"></a>

```java
public java.lang.String getKmsKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.logConfigurationInput"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration getLogConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a>

---

##### `metadataHttpHeadersInput`<sup>Optional</sup> <a name="metadataHttpHeadersInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.metadataHttpHeadersInput"></a>

```java
public java.util.List<java.lang.String> getMetadataHttpHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `metadataHttpHeaders`<sup>Required</sup> <a name="metadataHttpHeaders" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.metadataHttpHeaders"></a>

```java
public java.util.List<java.lang.String> getMetadataHttpHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceConfigurationWebhookEventsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceConfigurationWebhookEventsConfiguration">Eventsv2EventSourceConfigurationWebhookEventsConfiguration</a>

---


### Eventsv2EventSourceDetailsOutputReference <a name="Eventsv2EventSourceDetailsOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceDetailsOutputReference;

new Eventsv2EventSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.putWebhookDetails">putWebhookDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.resetWebhookDetails">resetWebhookDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWebhookDetails` <a name="putWebhookDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.putWebhookDetails"></a>

```java
public void putWebhookDetails(Eventsv2EventSourceDetailsWebhookDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.putWebhookDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a>

---

##### `resetWebhookDetails` <a name="resetWebhookDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.resetWebhookDetails"></a>

```java
public void resetWebhookDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.webhookDetails">webhookDetails</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference">Eventsv2EventSourceDetailsWebhookDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.webhookDetailsInput">webhookDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `webhookDetails`<sup>Required</sup> <a name="webhookDetails" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.webhookDetails"></a>

```java
public Eventsv2EventSourceDetailsWebhookDetailsOutputReference getWebhookDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference">Eventsv2EventSourceDetailsWebhookDetailsOutputReference</a>

---

##### `webhookDetailsInput`<sup>Optional</sup> <a name="webhookDetailsInput" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.webhookDetailsInput"></a>

```java
public IResolvable|Eventsv2EventSourceDetailsWebhookDetails getWebhookDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetails">Eventsv2EventSourceDetails</a>

---


### Eventsv2EventSourceDetailsWebhookDetailsOutputReference <a name="Eventsv2EventSourceDetailsWebhookDetailsOutputReference" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.eventsv2_event_source.Eventsv2EventSourceDetailsWebhookDetailsOutputReference;

new Eventsv2EventSourceDetailsWebhookDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.webhookUrl">webhookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `webhookUrl`<sup>Required</sup> <a name="webhookUrl" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.webhookUrl"></a>

```java
public java.lang.String getWebhookUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|Eventsv2EventSourceDetailsWebhookDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsv2EventSource.Eventsv2EventSourceDetailsWebhookDetails">Eventsv2EventSourceDetailsWebhookDetails</a>

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



